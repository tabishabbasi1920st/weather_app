import React, { useState } from "react";
import styled from "styled-components";

const ToggleSwitch = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch isDarkMode={isDarkMode} onClick={handleToggle}>
      <Slider isDarkMode={isDarkMode} />
    </Switch>
  );
};

export default ToggleSwitch;

const Switch = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px;
  transition: background-color 0.2s;
`;

const Slider = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffe168;
  border-radius: 50%;
  transition: transform 0.2s;
  transform: ${(props) =>
    props.isDarkMode ? "translateX(30px)" : "translateX(0)"};
`;