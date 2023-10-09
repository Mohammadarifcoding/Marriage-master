import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div>
            <h1>Oppss</h1> <br />
            <h3>The problem is {error.statusText || error.message}</h3> <br />
            {
                error.status  === 404 && <div>
                    <h3>Page not Found</h3>
                    <p>Go back</p>
                    <Link to='/'>Go Home</Link>
                </div>
            }
        </div>
    );
};

export default Error;