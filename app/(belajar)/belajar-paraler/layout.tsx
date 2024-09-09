export default function LaoutParaler({
  children,
  hello,
}: {
  children: any;
  hello: any;
}) {
  return (
    <div className="bg-slate-400 p-11">
      {children}
      {hello}
    </div>
  );
}
