import React, { useEffect, useState } from 'react';
// import './styles.css';  Adjust the path if necessary

const Local = () => {
    let [theme, setTheme] = useState(sessionStorage.getItem("theme") || "");
    let [lang, setLang] = useState(localStorage.getItem("lang") || "English");

    const handleLangChange = (e) => {
        setLang(e.target.value);
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    useEffect(() => {
        sessionStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div className="select-container">
                <select onChange={handleLangChange} value={lang}>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                </select>

                <select onChange={handleThemeChange} value={theme}>
                    <option value="Select Theme">Select Theme</option>
                    <option value="Light">Light</option>
                    <option value="Dark">Dark</option>
                </select>
            </div>

            {lang === "Gujarati" ? <h1>Gujarati</h1> : lang === "Hindi" ? <h1>Hindi</h1> : <h1>English</h1>}

            <div className="language">
                {lang === "English" ? (
                    <div className='content'>
                        <h3 className='aa'>The only way to do great work is to love what you do.</h3>
                    </div>
                ) : lang === "Hindi" ? (
                    <div className='content'>
                        <h3 h3 className='aa'>महान कार्य करने का एकमात्र तरीका यह है कि आप जो करते हैं, उससे प्रेम करें।</h3>
                    </div>
                ) : lang === "Gujarati" ? (
                    <div className='content'>
                        <h3 h3 className='aa'>મહાન કાર્ય કરવાનો એકમાત્ર રસ્તો એ છે કે તમે જે કરો છો તેને પ્રેમ કરો.</h3>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Local;
