import  { useState } from "react";

function Searching(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeys = (e) => {
    if (e.key === "Escape") {
      setSearchTerm("");
      console.log("Escape Pressed");
    }
  };

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  const resultContainerStyle = {
    marginTop: "10px",
  };

  const resultItemStyle = {
    marginBottom: "5px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInput}
        onKeyDown={handleKeys}
        style={inputStyle}
      />
      <button style={buttonStyle}>Search</button>

      {searchTerm && (
        <div style={resultContainerStyle}>
          {props.data
            .filter((item) =>
              item.name.toUpperCase().includes(searchTerm.toUpperCase())
            )
            .map((el) => (
              <p key={el.code} style={resultItemStyle}>
                {el.name}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}

export default Searching;
