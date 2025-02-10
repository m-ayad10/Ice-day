import { useState } from "react";

const Notepad = () => {
  const [showNotepad, setShowNotepad] = useState(false);
  const [text, setText] = useState("");

  // Function to toggle the notepad visibility
  const toggleNotepad = () => {
    setShowNotepad(!showNotepad);
  };

  // Function to clear text
  const clearText = () => {
    setText("");
  };

  // Function to save text as a .txt file
  const saveText = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.download = "notepad.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
    setShowNotepad(false)
  };

  return (
    <div className="container text-center mt-2 mb-2 p-4 bg-white rounded shadow" style={{ maxWidth: "600px" }}>
      <h2>AI Notepad 📝</h2>
      <button className="btn btn-primary mt-3 shadow-none" onClick={toggleNotepad}>
        {showNotepad ? "Hide Notepad" : "Show Notepad"}
      </button>

      {showNotepad && (
        <div className="mt-4 ">
          <textarea
            className="form-control shadow-none"
            rows="6"
            placeholder="Start typing..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="mt-3">
            <button className="btn btn-danger me-2 shadow-none" onClick={clearText}>
              Clear
            </button>
            <button className="btn btn-success shadow-none" onClick={saveText}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notepad;
