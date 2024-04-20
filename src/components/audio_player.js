import corr_sound from "../audio/correct_answer.mp3";
import wr_sound from "../audio/wrong_answer.mp3";
import bg_music from "../audio/background_music.mp3";
const correct_audio = new Audio(corr_sound);
const wrong_audio = new Audio(wr_sound);
const backgroundMusic = new Audio(bg_music);
function Player(type){
    if(type==="correct"){
        correct_audio.play();
    }else if(type==="wrong"){
        wrong_audio.play();
    }else if(type==="background"){
        backgroundMusic.play();
        backgroundMusic.loop = true;
    }else if(type==="background-pause"){
        backgroundMusic.pause();
    }
}

export default Player;