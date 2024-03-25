import { useRef, useState } from "react";
import Message from "./Message";

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
    <main className="w-full h-screen">
      <section className="mb-20">
        {messages.map((msg) => {
          if (msg.from == "Soham") {
            return (
              <div className="text-right">
                <Message p_name={msg.from} p_message={msg.content} />
              </div>
            );
          }
          return (
            <div className="text-left">
              <Message p_name={msg.from} p_message={msg.content} />
            </div>
          );
        })}
      </section>
      <footer className="w-screen fixed bottom-2 bg-white flex flex-col items-center">
        <section className="h-16 w-[99%] rounded-lg">
          <form className="flex items-center" onSubmit={addMessage}>
            <input
              ref={msgRef}
              name="message"
              id="message"
              className="border-2 rounded-lg text-xl w-[80%] h-[3.8rem] m-0 p-0"
              style={{ resize: "none" }}
            />
            <input
              type="submit"
              value="Submit"
              className="w-[19%] border-2 h-[3.8rem] mx-[1%] rounded"
            />
          </form>
        </section>
      </footer>
    </main>
  );
}

export default MessageViewer;
