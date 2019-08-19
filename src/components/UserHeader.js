import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render(){
        const {user} = this.props;
       // this.props.user
        //moved this to mapStateToProps
        //const user = this.props.users.find((user)=> user.id === this.props.userId);
        if(!user){
            return null;
        }
        return  <div className="header">{user.name}</div>;
    }
}
// we want to find the users in mapStateToProps
//ownProps ... uses the current components props 
const mapStateToProps = (state,ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
}
export default connect(mapStateToProps)(UserHeader); 