import styled from "styled-components";
import Button from "src/components/atoms/Button/Button";
import Modal from "src/components/atoms/Modal/Modal";
import useModal from "src/lib/hooks/toggleModal";

import { useNavigate } from "react-router-dom";
import { useProjects } from "src/lib/hooks/states/project";

const StyledTableItem = styled.td`
  padding: 8px;
  font-size: 1.5em;
`;

const StyledTableHeader = styled.th`
  padding: 8px;
  font-size: 2em;
  font-weight: 700;
`;

const StyledTable = styled.table`
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #607e87;
  text-align: left;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 255, 0.2);
  color: black;
`;

const TableItem = ({ children }) => {
  return <StyledTableItem>{children}</StyledTableItem>;
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <StyledTableHeader>Name</StyledTableHeader>
        <StyledTableHeader>Description</StyledTableHeader>
        <StyledTableHeader>Created At</StyledTableHeader>
      </tr>
    </thead>
  );
};

const TableButtons = () => {
  const navigate = useNavigate();
  const [isShowingModal, toggleModal] = useModal();

  return (
    <>
      <TableItem>
        <Button label="Tasks" color="#7aa952" onClick={() => navigate("1")} />
      </TableItem>
      <TableItem>
        <Button label="Edit" color="#ffa500" />
      </TableItem>
      <TableItem>
        <Button label="Destroy" color="#cc0000" onClick={toggleModal} />
      </TableItem>
      <Modal show={isShowingModal} onCloseButtonClick={toggleModal} />
    </>
  );
};

const Table = () => {
  const { projects } = useProjects();

  return (
    <StyledTable>
      <TableHeader />
      <tbody>
        {projects.map((project) => {
          return (
            <tr key={project.id}>
              <TableItem key={project.name}>{project.name}</TableItem>
              <TableItem key={project.description}>{project.description}</TableItem>
              <TableItem key={project.createdAt}>{project.createdAt}</TableItem>
              <TableButtons />
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
