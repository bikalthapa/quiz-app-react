import Card from './category_card';

import {
    Link, Outlet
} from 'react-router-dom';
function Practise(props) {
    return (
        <>
            <Outlet />
            <br/>
            <p className={`display-6 text-center text-${props.mode === "light" ? "dark" : "light"}`}>Choose Category</p>
            <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                <Link to="/practise/question"><Card mode={props.mode} properties={{
                    img: require("../images/computer_background.jpg"),
                    title: "Computer And Internet"
                }} /></Link>
                <Card mode={props.mode} properties={{
                    img: require("../images/science_background.jpg"),
                    title: "Science And Technology"
                }} />
                <Card mode={props.mode} properties={{
                    img: require("../images/history.jpg"),
                    title: "Culture And History"
                }} />
                <Card mode={props.mode} properties={{
                    img: require("../images/world.jpg"),
                    title: "World Quiz"
                }} />
            </div>
        </>
    );
}
export default Practise;