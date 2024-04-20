import { useEffect, useState } from "react";
import Modal from "./modal";
import Player from "./audio_player";

var quiz_question = [
    {
        question : '', opt : [], correct : ''
    }
];

let api = fetch("https://opentdb.com/api.php?amount=50&category=18&type=multiple");
api.then((response)=>{
    return response.json();
}).then((values)=>{
    var random = 0;

    for(let i = 0; i<values.results.length; i++){
        random = Math.round(Math.random() * 3);
        quiz_question[i] = {question: values.results[i].question, opt : values.results[i].incorrect_answers, correct : random};
        quiz_question[i].opt.splice(random,0,values.results[i].correct_answer);
    }
});

// var arr = Math.round(Math.random() * 4);
// console.log(arr);

function Question(props) {

    let btn, next_delay = 2, init_time = 10, warn_from = 25;

    var is_choosen = false;
    const [is_left, setIsLeft] = useState(true);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(init_time);
    const [turn, setTurn] = useState("SSBSS");
    const [board, setBoard] = useState(quiz_question);

    // This function will initialize the board
    function initialize_board() {
        setIsLeft(true);
        setCount(0);
        setScore(0);
        setTime(init_time);
    }

    // This function returns the id of give btn index
    function get_id(btn_indx) {
        return "btn" + btn_indx;
    }

    // Checks whether btn_id and correct answer is matched or not if matched returns true
    function is_correct(btn_id) {
        if (btn_id === board[count].correct) {
            return true;
        }
        return false;
    }
    // This function updates the question
    function update_question() {
        is_choosen = false;
        // Initializing the pointer Events 
        if ((count + 1) < board.length) {
            // Initializing the button colour to primary
            initialize_btn_color();
            setTime(init_time);
            setCount(count + 1);
            btn_state("");
        }
    }

    // Set the button to green if answer is correct
    function set_correct(btn) {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-success");
        setTimeout(() => {
            update_question();
        }, next_delay * 1000);

    }

    // Sets the button to red if answer is incorrect
    function set_incorrect(btn) {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-danger");
    }

    // Initializes the button color
    function initialize_btn_color() {
        for (let i = 0; i < 4; i++) {
            btn = document.getElementById("btn" + i);
            if (btn.classList.contains("btn-success")) {
                btn.classList.remove("btn-success");
                btn.classList.add("btn-primary");
            } else if (btn.classList.contains("btn-danger")) {
                btn.classList.remove("btn-danger");
                btn.classList.add("btn-primary");
            }
        }
    }
    // Disables and enables button click
    function btn_state(events) {
        document.getElementById("option_collection").style.pointerEvents = events;
    }
    // Identifyes the correct answer and display the answer
    function identify_correct() {
        var corr_btn_id = get_id(board[count].correct);
        set_correct(document.getElementById(corr_btn_id));
    }

    // This function handels all the btn events
    function btn_event_handeler(btn_indx) {
        is_choosen = true;
        btn = document.getElementById("btn" + btn_indx);
        if (is_correct(btn_indx)) {
            set_correct(btn);
            setScore(score + 1);
            if (props.game_music) {
                Player("correct");
            }
        } else {
            set_incorrect(btn);
            identify_correct();
            if (props.game_music) {
                Player("wrong");
            }
        }
        btn_state("none");
    }

    var timmer;
    useEffect(() => {
        timmer = setInterval(() => {
            // Decrease time if it is greater than 0
            if (time > 0) {
                setTime(time - 1);
            } else if ((count + 1) < board.length) {// Time is equal to zero and count is less than question length
                if (!is_choosen) {// Display message only if option is not choosen
                    props.showAlert("Sorry ! You are not able to respond on time.", "danger");
                }
                update_question();
            } else if ((count + 1) === board.length) {// No more question left
                setIsLeft(false);
                initialize_btn_color();
                btn_state("");
            }
        }, 1000);

        return () => {
            clearInterval(timmer);
        };
    });

    const btn0 = () => {
        btn_event_handeler(0);
    }

    const btn1 = () => {
        btn_event_handeler(1);
    }
    const btn2 = () => {
        btn_event_handeler(2);
    }
    const btn3 = () => {
        btn_event_handeler(3);
    }

    // Data to be send over modal components
    const modal_data = {
        score: score,
        question_count: board.length,
        init_board: initialize_board,
        is_left: is_left
    }
    // UI of quiz board //
    return (
        <>
            <Modal modal_data={modal_data} />
            <div className={`container text-${props.mode === "light" ? "dark" : "light"}`} style={{ maxWidth: "600px" }}>
                <p className="display-6 text-center">Practise Quiz</p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col text-center">
                        <button className="btn btn-warning w-100">Turn : {turn}</button>
                    </div>
                    <div className="col text-center">
                        <button className="btn btn-warning w-100">Question : {count + 1}/{board.length}</button>
                    </div>
                    <div className="col text-center">
                        <button className="btn btn-warning w-100">Score : {score}</button>
                    </div>
                </div>
                <div className="progress my-2 border-primary" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className={`progress-bar bg-${((100 / init_time) * time) > warn_from ? "success" : "danger"}`} style={{ width: (100 / init_time) * time + "%" }} id="time_progress">{time}s</div>
                </div>

                <p className={`fs-4 fw-bolder text-${props.mode === "light" ? "dark" : "light"}`} dangerouslySetInnerHTML={{__html: (count+1+" - "+board[count].question)}}></p>
                <div className="row row-cols-1 row-cols-md-2 g-4" id="option_collection">
                    <div className="col text-start">
                        <button className="btn btn-primary btn_shadow text-start w-100 h-100 option_btn" id="btn0" onClick={btn0} dangerouslySetInnerHTML={{__html:"1 - " + board[count].opt[0]}}></button>
                    </div>
                    <div className="col text-start">
                        <button className="btn btn-primary btn_shadow text-start w-100 h-100 option_btn" id="btn1" onClick={btn1} dangerouslySetInnerHTML={{__html:"2 - " + board[count].opt[1]}}></button>
                    </div>
                    <div className="col text-start">
                        <button className="btn btn-primary btn_shadow text-start w-100 h-100 option_btn" id="btn2" onClick={btn2} dangerouslySetInnerHTML={{__html:"3 - " + board[count].opt[2]}}></button>
                    </div>
                    <div className="col text-start">
                        <button className="btn btn-primary btn_shadow text-start w-100 h-100 option_btn" id="btn3" onClick={btn3} dangerouslySetInnerHTML={{__html:"4 - " + board[count].opt[3]}}></button>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Question;