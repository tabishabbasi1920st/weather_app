import styled from "styled-components";
import { FaLocationCrosshairs } from "react-icons/fa6";

const PreciseLocationButton = ({ setUsePreciseLocation }) => {
  return (
    <Button onClick={() => setUsePreciseLocation()}>
      <FaLocationCrosshairs />
      <span>Use precise location</span>
    </Button>
  );
};

export default PreciseLocationButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 200px;
  margin-top: 20px;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background-color: #ffe168;
  font-weight: 500;
  cursor: pointer;
`;
