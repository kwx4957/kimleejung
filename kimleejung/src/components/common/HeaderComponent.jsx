import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            header
            <ul>
                <li><Link to="/">main</Link></li>
                <li><Link to="/dividend">dividend</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </div>
    )
}

export default HeaderComponent;