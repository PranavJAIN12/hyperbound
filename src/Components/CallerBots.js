import React, { useState } from "react";
import people from "../PeopleData";

export default function CallerBots() {
    const[selectedPerson, setSelectedPerson] = useState(null)
  return (
    <>
    <div className="callerName">
      <p style={{ margin: "1rem" }}>
        Choose an AI buyer & start a roleplay conversation in &lt; 10 secs
      </p>
      <hr></hr>
      <div>
        {people.map((person) => (
          <div key={person.id} className="person" onClick={()=>setSelectedPerson(person)}>
            <button className="btn2">
              {" "}
              <h3>{person.name}</h3>
              <p>{person.occupation}</p>
            <button className="btn" style={{fontSize:'12px', padding:'10px'}}>Cold Call</button>
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="details-section">
        {selectedPerson ? (
          <>
            <h2>{selectedPerson.name}</h2>
            <p>{selectedPerson.occupation}</p>
            <p>{selectedPerson.details}</p>
          </>
        ) : (
          <p>Select a person to see their details.</p>
        )}
      </div>
    </>

  );
}
