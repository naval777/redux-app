import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as plpActions from '../actions/plpActions';
import {Link} from 'react-router';

class PlpPage extends React.Component{
    constructor(props,context) {
        super(props, context);
    }

    componentWillMount(){
        this.props.actions.loadPlp();
    }

    render(){
        var prodlist = this.props.plp.map((values,index) => {
            console.log(values);
          return values.Item.map((val,ind) =>{console.log(val);
               return <li key={ind}>{val.title}</li>;});
       });
        return(
            <div>
                <h1>Plp</h1>
                <Link to="/" className="btn btn-primary btn-lg">Home</Link><br />
                <Link to="pdp" className="btn btn-primary btn-lg">PDP</Link> <br />
                {prodlist}
            </div>
        );
    }
}
PlpPage.propTypes={
    plp:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};
function mapStateToProps(state,ownProps){
    return {
        plp:state.plp
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(plpActions,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(PlpPage);
