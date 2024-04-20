
function Create_contest(props){
    return (
        <>
            <p className={`display-6 text-center text-${props.mode === "light" ? "dark" : "light"}`}>Create a contest</p>
        </>
    );
};
export default Create_contest;