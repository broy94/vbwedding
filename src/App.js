import './App.css';
import Section from './Section';
import Menu from "./Menu";
import Main from "./main/Main";
import CountdownBar from "./countdown/CountdownBar";

function App() {
  return (
    <div className="app">
        <Menu />
        <div className="content">
            <Main />
            <Section id="rsvp">rsvp</Section>
            <Section id="schedule">schedule</Section>
            <Section id="seating">seating</Section>
            <Section id="accommodation">accommodation</Section>
        </div>
        <CountdownBar />
    </div>
  );
}

export default App;
