import { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Navbar from './navbar';
import Menu from './menu';
import Alert from './alert';

import Practise from './practise';
import Join from './join_contest';
import Create from './create_contest';
import Question from './question_board';
import Player from './audio_player';

function App() {

    //Enable and disable the alert //
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }


    // Enabling and disabling the  light mode //
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#3b3b3b";
            showAlert("Dark Mode has been enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "#d9ecec";
            showAlert("Light Mode has been enabled", "success");
        }
    }

    // Disable and enable bg_music
    const [bg_music, setBgMusic] = useState(false);
    const toggleBgMusic = () => {
        setBgMusic(!bg_music);
        if(!bg_music){
            Player("background");
        }else{
            Player("background-pause");
        }
    }
    // Disable and enable game_music
    const [game_music, setGameMusic] = useState(true);
    const toggleGameMusic = () => {
        setGameMusic(!game_music);
    }


    return (
        <Router>
            <>
                <Navbar bgMusicToggle={toggleBgMusic} gameMusicToggle={toggleGameMusic} mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Routes>

                    <Route exact path="/" element={
                        <Menu mode={mode} />
                    }></Route>

                    <Route exact path="/practise" element={<Practise mode={mode} />}>
                        <Route exact path="question" element={<Question game_music={game_music} showAlert={showAlert} mode={mode} />}></Route>
                    </Route>

                    <Route exact path="/join" element={
                        <Join mode={mode} />
                    }></Route>

                    <Route exact path="/create" element={
                        <Create mode={mode} />
                    }></Route>
                </Routes>
            </>
        </Router>
    );
}

export default App;