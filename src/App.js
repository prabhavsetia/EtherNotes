import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
