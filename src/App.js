import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import ComponentFive from './ComponentFive';
import SCPimg from "./images/logo.png"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ComponentOne" element={<ComponentOne />} />
          <Route path="/ComponentTwo" element={<ComponentTwo />} />
          <Route path="/ComponentThree" element={<ComponentThree />} />
          <Route path="/ComponentFour" element={<ComponentFour />} />
          <Route path="/ComponentFive" element={<ComponentFive />} />
        </Routes>
      </Router>
    </>
  );
}

function Home()
{
  return(
    <>
    <img src={SCPimg}></img> 
    <h1>SCP FOUNDATION</h1>
    <h2>Secure.Protect.Contain</h2>
    </>
  );
}

export default App;
