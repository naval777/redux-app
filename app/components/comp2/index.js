import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import {Link} from 'react-router';

class Comp2 extends React.Component{
  constructor(props,context) {
    super(props, context);
  }

  componentWillMount(){
    this.props.actions.loadComp2();
  }

  render(){
    var prodlist = this.props.data.map((values,index) => {
      console.log(values);
      return values.Item.map((val,ind) =>{
        return <li key={ind}>{val.description}</li>;});
    });
    return(
        <div>
          <h1>Comp2</h1>
          <Link to="/" className="btn btn-primary btn-lg">Home</Link><br />
          {prodlist}
        </div>
    );
  }
}
Comp2.propTypes={
  data:PropTypes.array,
  actions:PropTypes.object
};
function mapStateToProps(state,ownProps){
  return {
    data:state.comp2
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(actions,dispatch)
  };

}
export default connect(mapStateToProps,mapDispatchToProps)(Comp2);
