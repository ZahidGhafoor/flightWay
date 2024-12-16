import "./button.scss";

export const Button = ({
  size = "large",
  variant = "primary",
  children,
  ...rest
}) => {
  const buttonClass = `button ${size} ${variant}`;

  return (
    <button className={buttonClass} disabled={variant === "disabled"} {...rest}>
      {children}
    </button>
  );
};
