import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 80px;
  max-width: 100px;
  min-height: 40px;
  max-height: 50px;
  margin: 8px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${props => props.color};
  font-size: 0.7em;
`;

const Button = ({ color="#000000", label = "Text", onClick = () => {}, disabled }) => {
  console.log();
  return (
    <StyledButton color={color} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
