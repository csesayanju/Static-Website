import { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Allow for custom styling
}

const Button: FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-primary text-white py-2 px-4 rounded-md ${className}`}
  >
    {label}
  </button>
);

export default Button;
