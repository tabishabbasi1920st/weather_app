import styled from "styled-components";
import { FaCloudMoon, FaRegSun } from "react-icons/fa";

const ToggleSwitch = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch isDarkMode={isDarkMode} onClick={handleToggle}>
      <Slider isDarkMode={isDarkMode}>
        {isDarkMode ? (
          <FaCloudMoon fontSize={20} color={isDarkMode ? "#fff" : "#1f1f1f"} />
        ) : (
          <FaRegSun fontSize={20} />
        )}
      </Slider>
    </Switch>
  );
};

export default ToggleSwitch;

const Switch = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${(props) => (props.isDarkMode ? "#fff" : "#1f1f1f")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px;
  transition: background-color 0.2s;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
`;

const Slider = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffe168;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#1f1f1f" : "#fff")};
  border-radius: 50%;
  transition: transform 0.2s;
  transform: ${(props) =>
    props.isDarkMode ? "translateX(30px)" : "translateX(0)"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
