import styled from "styled-components";
import Button from "../Button/Button";

const ModalWrapper = styled.div`
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
  font-size: 1.25em;
  padding: 20px;
`

const StyledModalFooter = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  bottom: 0;
  background-color: rgb(243, 244, 246);
`

const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }
  
  return (
    <ModalWrapper>
      <StyledModal>
        <StyledModalBody>
          Click on the close button to close the modal.
        </StyledModalBody>
        <StyledModalFooter>
          <Button onClick={onCloseButtonClick} label="Close Modal" color="#ff726f"></Button>
        </StyledModalFooter>
      </StyledModal>
    </ModalWrapper>
  );
  };
  
export default Modal;
  