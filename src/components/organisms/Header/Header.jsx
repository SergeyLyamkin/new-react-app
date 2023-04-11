import { Link, useNavigate } from "react-router-dom";
import Button from "src/components/atoms/Button/Button";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 116px;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2em;
  font-weight: 700;
`;

const StyledNav = styled.div`
  display: flex;
  gap: 32px;
`

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Link to="/">React App</Link>
      <StyledNav>
        <Link to="/projects">Projects</Link>
      </StyledNav>
      <Button label="Go Back" color="#ed760e" onClick={() => navigate(-1)} />
    </StyledHeader>
  );
};

export default Header;
