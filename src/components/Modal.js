import React, { useState } from 'react';
import styled from '@emotion/styled';

const MyModal = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: '2000',
      }}
    >
      <main
        style={{
          background: "white",
          Width: "400px",
          margin: "auto",
          borderRadius: "1rem",
          padding: "32px 24px"
        }}
      >
        <h1
          style={{
            margin: '1.5rem 0'
          }}
        >Attention Viewer!!!</h1>
        <h3
          style={{
            margin: '1.5rem 0'
          }}
        >
          This is a clone of <a href="https://www.tesla.com/">tesla.com</a> and
          not the original website.
        </h3>
        <Button onClick={props.onClick}>Close</Button>
      </main>
    </div>
  );
};

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(false);
  };

  return <>{isOpen ? <MyModal onClick={handleClick} /> : null}</>;
}

const Button = styled.button`
  font-weight: 900;
  padding: 8px 12px;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 2px solid blueviolet;
  box-shadow: 1px 1px 4px blueviolet;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;
