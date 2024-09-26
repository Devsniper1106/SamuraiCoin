import React from 'react';

interface SubmitButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  type,
  disabled = false,
  title = 'Submit', // Default title
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full"
      aria-disabled={disabled} // Optional: Add ARIA attribute for better accessibility
    >
      {title}
    </button>
  );
};

export default SubmitButton;