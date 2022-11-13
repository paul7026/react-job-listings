import "./Stack.scss";

function Stack({ children, pos }) {
  return (
    <div
      className="stack"
      style={{ justifyContent: pos === "center" ? "center" : `flex-${pos}` }}
    >
      {children}
    </div>
  );
}

export default Stack;
