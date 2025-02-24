import { useState } from "react";
import { withRouter } from "react-router-dom";

const LogNewForm = ({addLog, history}) => {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "",
      });
    
      const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
      const handleNumberChange = (event) => {
        setLog({ ...log, [event.target.id]: Number(event.target.value) });
      };

      const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addLog(log);
        history.push("/logs");
      };
      return (
        <div className="New">
          <form onSubmit={handleSubmit}>
            <label htmlFor="captainName">Captain's Name</label>
            <input
              name="captainName"
              id="captainName"
              value={log.captainName}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Captain"
              required
            />
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={log.title}
              placeholder="Title"
              onChange={handleTextChange}
            />
            <label htmlFor="post">Post:</label>
            <textarea
              id="post"
              type="text"
              name="post"
              value={log.post}
              placeholder="Write post"
              onChange={handleTextChange}
            />
            <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
            <input
              id="mistakesWereMadeToday"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={log.mistakesWereMadeToday}
            />
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
            <input
              id="daysSinceLastCrisis"
              name="daysSinceLastCrisis"
              type="number"
              value={log.daysSinceLastCrisis}
              onChange={handleNumberChange}
              placeholder="Days Since Last Crisis"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      );
}

export default withRouter(LogNewForm);
