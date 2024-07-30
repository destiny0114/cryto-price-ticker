export default function Marquee({ children, id }) {
  return (
    <div id={id} className="marquee">
      <div className={"marquee__inner-wrap"}>
        <div className="marquee__inner">{children}</div>
      </div>
    </div>
  );
}
