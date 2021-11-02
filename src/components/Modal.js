import React, {useState} from 'react';
import styled from '@emotion/styled';

const MyModal = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(10px)",
        padding: "4px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <main
        style={{
          background: "white",
          Width: "400px",
          margin: "auto",
          zIndex: "100",
          borderRadius: "1rem",
          padding: "10px 16px"
        }}
      >
        <h1>Attention Viewer!!!</h1>
        <h3>
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
