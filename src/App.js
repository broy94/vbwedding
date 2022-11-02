import logo from './logo.svg';
import './App.css';
import Section from './Section';
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
        <Menu />
        <div className="content">
            <Section id="main" next="rsvp">main</Section>
            <Section id="rsvp" next="programs" prev="main">rsvp</Section>
            <Section id="programs" next="seating" prev="rsvp">programs</Section>
            <Section id="seating" next="accommodation" prev="programs">seating</Section>
            <Section id="accommodation" prev="seating">accommodation</Section>
        </div>
    </div>
  );
}

export default App;
