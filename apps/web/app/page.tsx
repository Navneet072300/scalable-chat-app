"use client";
import classes from "./page.module.css";

export default function Page() {
  return (
    <>
      <div>
        <h1>All Messages will appear here</h1>
      </div>
      <div>
        <input
          placeholder="Message..."
          type="text"
          className={classes["chat-input"]}
        />
        <button className={classes["chat-input"]}>Send</button>
      </div>
    </>
  );
}
