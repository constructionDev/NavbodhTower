import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      <FaSun /> / <FaMoon />
    </Button>
  );
};

export default ThemeToggle;
