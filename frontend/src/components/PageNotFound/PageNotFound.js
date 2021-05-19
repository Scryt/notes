import {Link} from "react-router-dom";

const PageNotFound = () => (
    <div>
        <p> 404 - You were not supposed to be here... <Link to="/">go home!</Link></p>
    </div>
);

export default PageNotFound