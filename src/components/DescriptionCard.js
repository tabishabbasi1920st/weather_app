import styled from "styled-components";

const DescriptionCard = ({ card, isDarkMode }) => {
  const { id, name, value, icon } = card;

  return (
    <MainContainer>
      <Card>
        <Header>
          {icon}
          <Key isDarkMode={isDarkMode}>{name}</Key>
        </Header>
        <Body>
          <Value isDarkMode={isDarkMode}>{value}</Value>
        </Body>
      </Card>
    </MainContainer>
  );
};

export default DescriptionCard;

const MainContainer = styled.li`
  /* border: 2px solid red; */
  min-height: 180px;
  min-width: 275px;
  padding: 10px;
`;

const Card = styled.li`
  height: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 8px 1px #bfbfbf;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Key = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#ffe15")};
`;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
`;

const Value = styled.p`
  font-size: 55px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#707070")};
`;
