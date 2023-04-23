import MainContent from "src/components/templates/MainContent/MainContent";

import { useParams } from "react-router-dom";

const TasksTemplatePage = () => {
  const { id } = useParams();

  return (
    <>
      <MainContent>
        {id}
      </MainContent> 
    </>
  );
};

export default TasksTemplatePage;
