import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const mailtoLink = `mailto:your_email@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = mailtoLink; // Open the email client with the mailto link
  };

  return (
    <div className="w-10/12 mx-auto mt-12 font-geistKanit  border-gray-800 border-2 p-8 rounded-lg pt-8">
      <div className="text-left py-3 pb-8">Contact Me</div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="py-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block text-white bg-transparent w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm  font-medium text-white"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full text-white bg-transparent p-2 border border-gray-300 rounded-md"
          />
        </div>
        <Button
          variant="outline"
          type="submit"
          className="text-black py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Send
        </Button>
      </form>
    </div>
  );
};
