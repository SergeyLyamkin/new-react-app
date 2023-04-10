import styled from "styled-components";

const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 8px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${props => props.color};
`;

const Button = ({ color, label = "Text", onClick, disabled }) => {
  return (
    <StyledButton color={color} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
