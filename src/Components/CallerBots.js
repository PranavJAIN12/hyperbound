import React, { useState, useEffect } from "react";
import people from "../PeopleData";

export default function CallerBots() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "en-US";

      const startRecognition = () => {
        recognition.start();
        recognition.onresult = (event) => {
          const newTranscript = event.results[0][0].transcript;
          setTranscript(newTranscript);
          recognition.stop();
        };
      };
      const stoprecognition = () => {
        recognition.stop();
      };

      document
        .getElementById("start-call-btn")
        .addEventListener("click", startRecognition);
      document
        .getElementById("stop-call-btn")
        .addEventListener("click", stoprecognition);

      return () => {
        recognition.abort();
      };
    } else {
      console.error("Speech Recognition is not supported by your browser.");
    }
  }, []);

  return (
    <>
      <div className="callerName">
        <p style={{ margin: "1rem" }}>
          Choose an AI buyer & start a roleplay conversation in &lt; 10 secs
        </p>
        <hr />
        <div>
          {people.map((person) => (
            <div
              key={person.id}
              className="person"
              onClick={() => setSelectedPerson(person)}
            >
              <button className="btn2">
                <h3>{person.name}</h3>
                <p>{person.occupation}</p>
                <button
                  className="btn"
                  style={{ fontSize: "12px", padding: "10px" }}
                  id="start-call-btn"
                >
                  Start Call
                </button>
                <button
                  className="btn"
                  style={{ fontSize: "12px", padding: "10px", margin: "1rem" }}
                  id="stop-call-btn"
                >
                  stop Call
                </button>
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
            <br />
            <h5>Converted Text: {transcript}</h5>
          </>
        ) : (
          <div>
            <p style={{ marginTop: "20rem" }}>
              Select a person to see their details.
            </p>
            <br />
          </div>
        )}
      </div>
    </>
  );
}
