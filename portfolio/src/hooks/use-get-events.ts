import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";

// Define a type for GitHub event
interface GithubEvent {
  id: string;
  type: string;
  payload?: {
    commits?: Array<{ message: string }>;
    // Add other properties based on your usage
  };
  // Add other relevant fields based on your needs
}

export const useGithubActivity = () => {
  const [activity, setActivity] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch recent GitHub activity
    const fetchActivity = async () => {
      setLoading(true);
      const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN,
      });

      try {
        const response = await octokit.request("GET /users/diivvuu/events", {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        setActivity(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  return { activity, loading, error };
};
