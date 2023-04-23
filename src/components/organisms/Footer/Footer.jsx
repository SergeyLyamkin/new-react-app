import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const Footer = () => {
  return <StyledFooter>© 2023 [Lyamkin Sergey]</StyledFooter>;
};

export default Footer;
