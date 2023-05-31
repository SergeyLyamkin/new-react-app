import Button from "src/components/atoms/Button/Button";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

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
  background: #90c7ff;
`;

const StyledNav = styled.div`
  display: flex;
  gap: 32px;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Link to="/">React App</Link>
      <StyledNav>
        <Link to="/projects">Projects</Link>
      </StyledNav>
      <Button label="Go Back" color="#72bcd4" onClick={() => navigate(-1)} />
    </StyledHeader>
  );
};

export default Header;
