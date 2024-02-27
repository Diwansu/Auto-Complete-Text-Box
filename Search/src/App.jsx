import "./App.css";
import Searching from "./component/search";
import Data from "./resources/countryData.json";

function App() {
  return (
    <>
      <Searching data={Data} />
    </>
  );
}

export default App;
