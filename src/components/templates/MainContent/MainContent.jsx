import styled from "styled-components";
import Header from "src/components/organisms/Header/Header";
import Footer from "src/components/organisms/Footer/Footer";
import ScrollToTopButton from "src/components/atoms/ScrollToTopButton/ScrollToTopButton";

import { useState, useEffect } from "react";

const StyledMainContent = styled.main`
  min-height: calc(100vh - 216px);
`;

const MainContent = ({ children }) => {
	const [showScrollButton, setShowScrollButton] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
			{showScrollButton && (
        <ScrollToTopButton />
      )}
      <Header />
      <StyledMainContent>
        {children}
      </StyledMainContent>
      <Footer />
    </>
  );
};

export default MainContent;
