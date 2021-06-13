import LogNewForm from "../Components/LogNewForm";

const New = ({ addLog }) => {
  return (
    <div className="New">
      <h2>New</h2>
      <LogNewForm addLog={addLog} />
    </div>
  );
}

export default New;