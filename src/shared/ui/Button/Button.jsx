import "./Button.css";

function Button({
  children = "Підібрати станцію",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}) {
  const variantClass = `main-btn--${variant}`;

  return (
    <button
      type={type}
      className={`main-btn ${variantClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="main-btn__label">{children}</span>
    </button>
  );
}

export default Button;
