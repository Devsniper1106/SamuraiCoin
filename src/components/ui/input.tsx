// src/components/shared/TextField.tsx
import React from 'react';

interface TextFieldProps {
  type?: string;
  placeholder?: string;
  id?: string;
  className: string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<TextFieldProps> = ({ type, id , className, placeholder, }) => {
  return (
    <input type={type} id={id} placeholder={placeholder} className={className}  />
  );
};

export default Input;