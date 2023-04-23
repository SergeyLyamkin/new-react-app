import styled from "styled-components";
import Button from "src/components/atoms/Button/Button";

const StyledButton = styled.div`
  position: fixed;
  bottom: 70px;
  right: 50px;
`;

const ScrollToTopButton = () => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledButton>
      <Button color="#2b82d9" label="Scroll to top" onClick={onClick} />
    </StyledButton>
  );
};

export default ScrollToTopButton;
