"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState("");
  return (
    <>
      <div>
        <h1>All Messages will appear here</h1>
      </div>
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message..."
          className={classes["chat-input"]}
        />
        <button
          onClick={(e) => sendMessage(message)}
          className={classes["chat-input"]}
        >
          Send
        </button>
      </div>
    </>
  );
}
