import React from 'react';
// import {Link} from 'react-router';
class HomePage extends React.Component{
    render(){
        return(
            <div>
                <h1>Target Home</h1>
                <p>React+Redux</p>
                <Comp1/>
                {/*<Link to="plp" className="btn btn-primary btn-lg">PLP</Link><br />*/}
                {/*<Link to="pdp" className="btn btn-primary btn-lg">PDP</Link>*/}
            </div>
        );
    }
}

export default HomePage;