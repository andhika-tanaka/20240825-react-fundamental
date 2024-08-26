import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>There's an error here 
            <Link to="/"> Go Back</Link>
        </div>
    );
}

export default ErrorPage;