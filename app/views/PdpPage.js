import React from 'react';
import {Link} from 'react-router';

class PdpPage extends React.Component{
    render(){
        return(
            <div>
                <h1>PDP</h1>
                <Link to="/" className="btn btn-primary btn-lg">Home</Link><br />
                <Link to="plp" className="btn btn-primary btn-lg">PlP</Link>
            </div>
        );
    }
}

export default PdpPage;