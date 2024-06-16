import styled from "styled-components";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ArrowButton = ({ isDarkMode, arrowType, executableFunction }) => {
  const getAppropriateIcon = () => {
    switch (arrowType) {
      case "BACK":
        return (
          <MdOutlineArrowBackIosNew
            size={30}
            color={isDarkMode ? "white" : "black"}
          />
        );
      case "FORWARD":
        return (
          <MdOutlineArrowForwardIos
            size={30}
            color={isDarkMode ? "white" : "black"}
          />
        );
      case undefined:
        return null;
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <Button isDarkMode={isDarkMode} onClick={executableFunction}>
        {getAppropriateIcon()}
      </Button>
    </MainContainer>
  );
};

export default ArrowButton;

const MainContainer = styled.div``;

const Button = styled.button`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#1f1f1f" : "transparent"};
  height: 100%;
  width: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
