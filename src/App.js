import './App.css';
import Section from './section/Section';
import Menu from "./menu/Menu";
import Main from "./section/main/Main";
import CountdownBar from "./countdown/CountdownBar";
import {localizedStrings} from "./Localization";
import {useState} from "react";
import Schedule from "./section/schedule/Schedule";

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
