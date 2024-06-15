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

  .search-btn-txt {
    color: #757579;
    @media screen and (max-width: 576px) {
      display: none;
    }
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;
