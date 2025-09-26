"use client";

import React, { useState } from "react";

export default function Chat() {
  const [userMessage, setUserMessage] = useState("");
  const [chatState, setChatState] = useState<"welcome" | "loading" | any>(
    "welcome"
  );
  const [lastQuestion, setLastQuestion] = useState("");

  const handleSend = async () => {
    if (!userMessage.trim()) return;
    setLastQuestion(userMessage);
    setChatState("loading");

    try {
      const response = await fetch(
        "https://ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com/chat?noqueue=1",
        {
          method: "POST",
          headers: {
            "x-rapidapi-key":
              "c8d975f7ddmsh8cab9eefce586a0p17521ejsn5474f7d61aa6",
            "x-rapidapi-host":
              "ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
            specialization: "general",
            language: "en",
          }),
        }
      );

      const data = await response.json();
      setChatState(data?.result?.response);
    } catch (error) {
      console.error(error);
      setChatState("welcome");
      alert("An error occurred");
    }
  };

  const handleNewChat = () => {
    setUserMessage("");
    setChatState("welcome");
    setLastQuestion("");
  };

  return (
    <section className="mx-auto min-h-[80vh] max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-6 flex-1 sm:text-center flex-col flex justify-center items-center">
        {/* Welcome Message */}
        {chatState === "welcome" && (
          <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl">
            <h1 className="text-indigo-700 font-bold text-3xl mb-4">
              AI Pneumonia Diagnosis Assistant
            </h1>
            <p className="text-gray-600 leading-relaxed lg:text-lg">
              Hello, I’m your ai Pneumonia Diagnosis assistant. I can help you
              understand your symptoms, suggest possible conditions, and guide
              you on the next steps. Please remember, I don’t replace a
              qualified healthcare professional, but I can provide you with
              reliable information and advice to point you in the right
              direction. How can I assist you today?
            </p>
          </div>
        )}

        {/* Loading State */}
        {chatState === "loading" && (
          <div className="bg-white shadow-md rounded-xl p-6 text-center max-w-xl">
            <p className="text-indigo-600 font-medium">
              Getting Answers… Please wait.
            </p>
          </div>
        )}

        {/* Chat Response */}
        {chatState !== "loading" && chatState !== "welcome" && chatState && (
          <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-indigo-700">
                Your Question
              </h2>
              <p className="text-gray-700 italic mt-2">"{lastQuestion}"</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-indigo-700">
                AI Response
              </h2>
              <p className="text-gray-700 mt-2">{chatState?.message}</p>
            </div>

            {chatState?.recommendations?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg text-indigo-600">
                  Recommendations
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  {chatState.recommendations.map((rec: string, i: number) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            {chatState?.warnings?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg text-red-600">Warnings</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  {chatState.warnings.map((warn: string, i: number) => (
                    <li key={i}>{warn}</li>
                  ))}
                </ul>
              </div>
            )}

            {chatState?.references?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg text-indigo-600">
                  References
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  {chatState.references.map((ref: string, i: number) => (
                    <li key={i}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 flex justify-center">
              <button
                onClick={handleNewChat}
                className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Start New Chat
              </button>
            </div>
          </div>
        )}

        {/* User Input */}
        {(chatState === "welcome" || chatState === "loading") && (
          <div className="w-full max-w-xl flex gap-3 mt-8">
            <input
              type="text"
              placeholder="Type here..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
