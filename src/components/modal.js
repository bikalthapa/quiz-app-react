import { useState } from "react";
import { Link } from "react-router-dom";
// Modal Components
function Modal(props) {
    const [modalState, setModalState] = useState("");
    const playAgain = ()=>{
        props.modal_data.init_board();
        setModalState("d-none");
    }
    const quit = ()=>{
        props.modal_data.init_board();
        setModalState("d-none");
    };
    return (
        <div className={`container quiz_modal bg-dark bg-opacity-75 d-${props.modal_data.is_left?"none":""}`}>
            <div className="modal-dialog modal_container bg-dark text-light">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Quiz Result</h5>
                    </div><hr/>
                        <div className="modal-body">
                            <p className="text-bold fs-5">Score : {props.modal_data.score}</p>
                            <p className="fs-5">Total Question : {props.modal_data.question_count}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={playAgain} className="btn btn-primary m-2">Play Again</button>
                            <Link to="/practise" type="button" onClick={quit} className="btn btn-primary m-2">Quit</Link>
                        </div>
                </div>
            </div>
        </div>
    );
}



export default Modal;