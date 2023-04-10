import { useState, useEffect } from "react";
import MainContent from "src/components/organisms/MainContent/MainContent";
import ScrollToTopButton from "src/components/atoms/ScrollToTopButton/ScrollToTopButton";
import Card from "src/components/molecules/Card/Card";

const DefaultTemplate = () => {
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
      <MainContent>
        <Card />
      </MainContent>
    </>
  );
};

export default DefaultTemplate;
