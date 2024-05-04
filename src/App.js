import {Route, Routes} from "react-router-dom";
import Sidenav from './Components/Sidenav';


function App() {
  return (
    <div>
      <Routes>
              
        {/* <Route path="/list" element={< ListsBox />} /> */}
        <Route path="/" element={< Sidenav />} />

      </Routes>
    </div>
  );
}

export default App;
