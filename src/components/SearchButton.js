import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchButton = () => {
  const navigate = useNavigate();

  return (
    <MainContainer onClick={() => navigate("/search")}>
      <span className="search-btn-txt">Enter city or zip code..</span>
      <Button>
        <FaSearch />
      </Button>
    </MainContainer>
  );
};

export default SearchButton;

const MainContainer = styled.div`
  height: 40px;
  background-color: white;
  padding: 5px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 1px 1px 5px 1px #bfbfbf;

  .search-btn-txt {
    color: #757579;
    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  @media screen and (max-width: 576px) {
    padding: 5px 10px;
  }
`;

const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 20px;

  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`;
