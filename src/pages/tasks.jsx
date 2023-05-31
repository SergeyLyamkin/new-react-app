import MainContent from "src/components/templates/MainContent/MainContent";

// import { useParams } from "react-router-dom";
import { useTasks } from "src/lib/hooks/states/task";

const TasksTemplatePage = () => {
  // const { id } = useParams();
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <MainContent>
      {tasks.map((task) => {
          return (
            <div key={task.id}>
              <div>{task.title}</div>
              <div>{task.deadlineAt}</div>
              <div>{task.createdAt}</div>
            </div>
          );
        })}
    </MainContent>
  )
};

export default TasksTemplatePage;
