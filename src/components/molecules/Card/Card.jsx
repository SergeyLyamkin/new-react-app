import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 3px solid black;
  border-radius: 30px;
  text-align: center;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 255, .2);
`;

const StyledCardHeader = styled.div`
  margin: 10px 0;
  font-size: 2em;
  line-height: 1.25em;
`;

const StyledCardItem = styled.li`
  font-size: 1.5em;
  line-height: 1.75em;
`;

const CardHeader = ({ children }) => {
  return (
    <StyledCardHeader>{children}</StyledCardHeader>
  );
}

const CardItem = ({ children }) => {
  return (
    <StyledCardItem>{children}</StyledCardItem>
  );
}

const Card = () => {
  return (
    <StyledCard>
      <CardHeader>Sergey Lyamkin</CardHeader>
      <ol>
        <CardItem>Часто болею</CardItem>
        <CardItem>Закрыл 3 семестр без допсессий</CardItem>
        <CardItem>3400 часов в Dota 2)))</CardItem>
      </ol>
    </StyledCard>
  );
};

export default Card;
