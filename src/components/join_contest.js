
function Join_contest(props) {
    const textStyle = {
        color: props.mode === "light" ? "black" : "white"
    }
    return (
        <>
            <p className="display-6 text-center" style={textStyle}>Join The Contest</p>
            <form className="container" style={{maxWidth:"400px"}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={textStyle}>Contest Id</label>
                    <input type="number" className={`form-control bg-${props.mode}`} style={textStyle} id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={textStyle}>Contest Password</label>
                    <input type="password" className={`form-control bg-${props.mode}`} style={textStyle} id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className={`form-check-input bg-${props.mode}`} style={textStyle} id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1" style={textStyle}>I agree on rules and regulations.</label>
                </div>
                <input type="btn" className="btn btn-primary w-100" defaultValue="Join Now"/>
            </form>
        </>
    );
};
export default Join_contest;