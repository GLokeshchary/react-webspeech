import React, { useState } from "react";
import Vassistant from "./Vassistant";

const Commands = () => {
  const [message, setMessage] = useState("");
  const commands = [
    {
      command: "I would like to order *",
      callback: (food) => setMessage(`Your order is for: ${food}`),
      matchInterim: true,
    },
    {
      command: "Background color *",
      callback: (color) => (document.body.style.backgroundColor = color),
      matchInterim: true,
    },
    {
      command: "Open my portfolio",
      callback: (website) =>
        window.open("https://findlokeshchary.netlify.app/"),
    },
    {
      command: "The weather is :condition today",
      callback: (condition) => setMessage(`Today, the weather is ${condition}`),
    },
    {
      command: ["Hello", "Hi"],
      callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
      matchInterim: true,
    },
    {
      command: "Beijing",
      callback: (command, spokenPhrase, similarityRatio) =>
        setMessage(
          `${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`
        ),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
    },
    {
      command: ["eat", "sleep", "leave"],
      callback: (command) => setMessage(`Best matching command: ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
      matchInterim: true,
    },
  ];
  return (
    <div>
      <p style={{ backgroundColor: "black", color: "white", height: "50px" }}>
        {message}
      </p>
      <Vassistant commands={commands} />
    </div>
  );
};

export default Commands;
