function Settings(props) {

    const setting_container = {
        backgroundColor: props.mode === "light" ? "white" : "#4E5860",
        color: props.mode === "light" ? "black" : "white"
    };

    const accordion_header = {
        backgroundColor: props.mode === "light" ? "#F0F0F0" : "#354452",
        color: props.mode === "light" ? "black" : "white"
    }
    const accordion_body = {
        backgroundColor: props.mode === "light" ? "#D9E0E2" : "#687580",
        color: props.mode === "light" ? "black" : "white"
    }


    return (
        <>
            <div className="modal fade" id="settingsModal" tabIndex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" style={setting_container}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="settingsModalLabel">Settings</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="accordion accordion-flush" id="accordionFlushExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button style={accordion_header} className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Appereance
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body" style={accordion_body}>
                                            <div className="form-check form-switch form-check-reverse">
                                                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="mode" defaultChecked />
                                                <label className="form-check-label text-start w-100" htmlFor="mode">Light Mode</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button style={accordion_header} className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Music
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body" style={accordion_body}>
                                            <div className="form-check form-switch form-check-reverse">
                                                <input onInput={props.bgMusicToggle} className="form-check-input" type="checkbox" role="switch" id="backgroundMusic" />
                                                <label className="form-check-label text-start h-100 w-100" htmlFor="backgroundMusic">Background Music</label>
                                            </div><br />
                                            <div className="form-check form-switch form-check-reverse">
                                                <input onInput={props.gameMusicToggle} className="form-check-input" type="checkbox" role="switch" id="gameMusic" defaultChecked />
                                                <label className="form-check-label text-start h-100 w-100" htmlFor="gameMusic">Game Music</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button style={accordion_header} className="accordion-button collapsed fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Customize
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body" style={accordion_body}>
                                            <div className="accordion-body" style={accordion_body}>
                                                <div className="form-check form-switch form-check-reverse">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="autoAnswer" defaultChecked />
                                                    <label className="form-check-label text-start h-100 w-100" htmlFor="autoAnswer">Auto Answer</label>
                                                </div>
                                                <br/>
                                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                                    <div className="col d-inline">
                                                        <label className="form-check-label text-start w-100" htmlFor="timeLimit">Time Limit</label>
                                                        <input type="number" className="form-control" id="timeLimit" defaultValue={5} />
                                                    </div>
                                                    <div className="col">
                                                        <label className="form-check-label text-start w-100" htmlFor="questionLimit">Question Limit</label>
                                                        <input type="number" className="form-control" id="questionLimit" defaultValue={5} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Settings;



