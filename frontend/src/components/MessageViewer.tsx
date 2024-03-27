import { useRef, useState } from "react";
import { io } from "socket.io-client";
import Message from "./Message";
import UserChat from "./UserChat";

const socket = io("http://localhost:3000", {
  query: {
    test: "test",
  },
});

socket.on("resp", (resp) => {
  console.log(resp);
});

interface messsageFormat {
  from: string;
  content: string;
}

function MessageViewer() {
  const message1: messsageFormat = {
    from: "test",
    content: "this is test",
  };
  const msgRef = useRef<HTMLInputElement>(null);
  const [messages, setMessage] = useState<messsageFormat[]>([message1]);

  const addMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const val = msgRef.current!.value;
    if (val === "") return;

    const msg: messsageFormat = {
      from: "Soham",
      content: val,
    };

    setMessage([...messages, msg]);
    msgRef.current!.value = "";
  };

  return (
    <main className="w-full h-screen flex dark:bg-slate-900 dark:text-slate-50">
      <div className="w-[30%] flex flex-col items-center overflow-auto">
        <UserChat UserName="Chat1" />
      </div>
      <div className="w-[70%] border-l-2 dark:bg-slate-800">
        <section className="p-2 text-2xl border-2 rounded-lg m-2">
          Chat1 Messages
        </section>
        <section className="mb-20 w-full">
          {messages.map((msg, index) => {
            if (msg.from == "Soham") {
              return (
                <div className="text-right" key={index}>
                  <Message p_name={msg.from} p_message={msg.content} />
                </div>
              );
            }
            return (
              <div className="text-left" key={index}>
                <Message p_name={msg.from} p_message={msg.content} />
              </div>
            );
          })}
        </section>
        <div className="w-[70%] fixed bottom-2 bg-transparent flex flex-col items-center">
          <section className="h-16 w-[99%] rounded-lg">
            <form className="flex items-center" onSubmit={addMessage}>
              <input
                ref={msgRef}
                name="message"
                id="message"
                className="border-2 rounded-lg text-xl w-[80%] h-[3.8rem] m-0 pl-2 dark:text-slate-50 dark:bg-zinc-800"
                style={{ resize: "none" }}
              />
              <input
                type="submit"
                value="Submit"
                className="w-[19%] border-2 h-[3.8rem] mx-[1%] rounded"
              />
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default MessageViewer;
