
function Card(props) {
    return (
        <div className="col">
            <div className="card">
                <img src={props.properties.img} className="card-img-top" alt={props.properties.title} />
                <div className={`d-flex justify-content-center align-items-center text-center card-body card-img-overlay bg-${props.mode} bg-opacity-50`}>
                    <h5 className={`card-title display-5 text-${props.mode==="light"?"dark":"light"}`}>{props.properties.title}</h5>
                </div>
            </div>
        </div>
    );
}
export default Card;