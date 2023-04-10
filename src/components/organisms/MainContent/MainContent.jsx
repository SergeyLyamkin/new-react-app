import styled from "styled-components";
import Header from "src/components/organisms/Header/Header";
import Footer from "src/components/organisms/Footer/Footer";

const StyledMainContent = styled.main`
  min-height: calc(100vh - 216px);
`;

const MainContent = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMainContent>
        {children}
      </StyledMainContent>
      <Footer />
    </>
  );
};

export default MainContent;
