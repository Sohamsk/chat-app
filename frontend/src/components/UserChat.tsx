interface props {
  UserName: string;
}

export default function UserChat(props: props) {
  return (
    <article className="w-[98%] border-2 rounded-lg my-2 p-2">
      {props.UserName}
    </article>
  );
}
