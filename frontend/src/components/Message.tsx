interface props {
  p_name: string;
  p_message: string;
}

function Message(props: props) {
  return (
    <section className="p-2 m-2 border-2 rounded-lg inline-block max-w-[70%]">
      <p className="text-xs text-left">{props.p_name}</p>
      <p className="ml-2 break-words p-2 text-left">{props.p_message}</p>
    </section>
  );
}

export default Message;
