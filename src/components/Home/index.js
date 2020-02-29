import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import {
  Grid,
  Form,
  Button,
  Header,
  Table,
  Loader,
  Divider,
  Modal,
  Icon
} from "semantic-ui-react";

import { AuthUserContext, withAuthorization } from "../Session";

import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

class HomeBaseComponent extends Component {
  state = {
  
  };

  componentDidMount() {
    
  }

  componentWillUnmount() {
 
  }

 

  render() {
    const {
    
    } = this.state;
   

    return (
      <div style={{ margin: "30px" }}>
        <Header as="h2" textAlign="center">
          Home Page Jesteś zalogowany jako {this.props.authUser.username}
        </Header>
      
      </div>
    );
  }
}
const HomePage = props => (
  <AuthUserContext.Consumer>
    {authUser => <HomeBaseComponent authUser={authUser} {...props} />}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default compose(withFirebase, withAuthorization(condition))(HomePage);
