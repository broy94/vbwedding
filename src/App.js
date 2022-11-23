import './App.css';
import Section from './Section';
import Menu from "./Menu";
import Main from "./main/Main";
import CountdownBar from "./countdown/CountdownBar";
import {localizedStrings} from "./Localization";
import {useState} from "react";
import Schedule from "./schedule/Schedule";

function App() {
    const initLang = localizedStrings.getInterfaceLanguage() === "hu-HU" ? "hu" : "en";
    const [language, setLanguage] = useState(initLang);

    const onLanguageChange = ({value}) => {
        localizedStrings.setLanguage(value);
        setLanguage(value);
    };

    return (
        <div className="app">
            <Menu onLanguageChange={onLanguageChange} currentLanguage={language} />
            <div className="content">
                <Main />
                <Schedule />
                <Section id="seating">seating</Section>
                <Section id="accommodation">accommodation</Section>
            </div>
            <CountdownBar />
        </div>
  );
}

export default App;
