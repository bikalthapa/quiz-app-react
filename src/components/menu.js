import join_logo from './../images/person_join.svg';
import create_logo from './../images/plus.svg';
import practise_logo from './../images/pencil.svg';
import { Link } from 'react-router-dom';

function Menu(props) {
    const colorStyle = {
        color: props.mode==="light"?"black":"lightgrey",
        backgroundColor: props.mode==="light"?"#d9ecec":"#3b3b3b"
    }
    return (
        <div>
            <div className="w-100 h-100" style={colorStyle}>

                <p className='display-6 text-center'>GK Master</p>

                <div style={{maxWidth : '250px', margin: 'auto'}}>
                    <div>
                        <Link to="/practise" className='btn btn-primary w-100 p-2 m-4 btn_shadow'>
                            <img src={practise_logo} alt="Practise Logo" />&nbsp;&nbsp;&nbsp;&nbsp;
                            Practise Quiz
                        </Link>
                    </div>
                    <div>
                        <Link to="/join" className='btn btn-primary w-100 p-2 m-4 btn_shadow'>
                            <img src={join_logo} alt="Join Logo" />&nbsp;&nbsp;&nbsp;&nbsp;
                            Join Contest
                        </Link>
                    </div>
                    <div>
                        <Link to="/create" className="btn btn-primary w-100 p-2 m-4 btn_shadow">
                            <img src={create_logo} alt="Create Context Logo" />&nbsp;&nbsp;&nbsp;&nbsp;
                            Create Contest
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Menu;