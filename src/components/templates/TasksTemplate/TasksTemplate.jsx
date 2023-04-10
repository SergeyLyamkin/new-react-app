import { useParams } from "react-router-dom";
import MainContent from "src/components/organisms/MainContent/MainContent";

const TasksTemplate = () => {
  const { id } = useParams();

  return (
    <MainContent>
      {id}
    </MainContent> 
  );
};

export default TasksTemplate;
