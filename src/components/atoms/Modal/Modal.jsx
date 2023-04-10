import styled from "styled-components";
import Button from "../Button/Button";

const StyledModalWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(107, 114, 128, 0.5);
  z-index: 9;
  width: 100%;
  min-height: 100vh;
`

const StyledModal = styled.div`
  position: relative;
  background-color: #fff;
  width: 500px;
  height: 200px;
  border: 1px solid rgb(179, 179, 179);
  border-radius: 15px;
  overflow: hidden;
  margin: 0 15px 160px;
`

const StyledModalBody = styled.div`
  padding: 20px;
`

const StyledModalFooter = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  background-color: rgb(243, 244, 246);
`

const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }
  
  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledModalBody>
          Click on the close button to close the modal.
        </StyledModalBody>
        <StyledModalFooter>
          <Button onClick={onCloseButtonClick} label="Close Modal"></Button>
        </StyledModalFooter>
      </StyledModal>
    </StyledModalWrapper>
  );
  };
  
export default Modal;
  