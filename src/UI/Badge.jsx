import { ReactComponent as Remove } from "../assets/images/icon-remove.svg";

import "./Badge.scss";

function Badge({
  variant = "basic",
  colorScheme = "light",
  children,
  onClear,
  onClick,
}) {
  return (
    <div
      className={`badge badge--${variant} badge--${colorScheme}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === "clearable" && (
        <div className="badge-remover" onClick={onClear}>
          <Remove />
        </div>
      )}
    </div>
  );
}

export default Badge;
