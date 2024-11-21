
interface ButtonProps {
    children: string,
    onClick?: ()=> void,
    disabled: boolean,
    className: string
}

const Button = ({ children, onClick, disabled, className } : ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      role="button"
    >
      {children}
    </button>
  );
};

export default Button;
