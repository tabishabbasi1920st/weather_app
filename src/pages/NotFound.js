import styled from "styled-components";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header isDarkMode={isDarkMode} searchBtn={false} />
      <Body>
        <ErrTxt isDarkMode={isDarkMode}>404 route not found</ErrTxt>
        <Button onClick={() => navigate("/")}>Go Back To Home</Button>
      </Body>
    </MainContainer>
  );
};

export default NotFound;

const MainContainer = styled.div`
  border: 2px solid red;
  min-height: 100vh;
  border: none;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    padding: 10px 10%;
  }
`;

const ErrTxt = styled.p`
  font-size: 40px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;

const Button = styled.button`
  height: 40px;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 5px 1px #bfbfbf;
  }
`;
