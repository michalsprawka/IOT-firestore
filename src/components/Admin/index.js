import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import * as ROUTES from "../../constants/routes";
import { SignUpLink } from "../SignUp";

import {
  Header,
  Loader,
  Table,
  Button,
  Card,
  Form,
  Divider
} from "semantic-ui-react";

const AdminPage = () => (
  <div>
    <Header as="h2">Admin</Header>
    <p>The Admin Page is accessible by every signed in admin user.</p>

    <Switch>
   
      <Route exact path={ROUTES.ADMIN_USERS_DETAILS} component={UserItem} />
      
      <Route exact path={ROUTES.ADMIN} component={UserList} />
      
    </Switch>
  </div>
);

class UserListBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.unsubscribeUsers = this.props.firebase.users().onSnapshot( snapshot => {
      let usersList = []; 
      snapshot.forEach(
        doc => usersList.push({
          ...doc.data(), uid: doc.id
        })
       )
      this.setState({
        users: usersList,
        loading: false
      });
    });

  

  }

  componentWillUnmount() {
   this.unsubscribeUsers();
  
  }
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

 

  render() {
    const {
      users,
      loading,
    
    } = this.state;

    return (
      <div>
        <Header as="h1" style={{color: "blue"}}>Users</Header>
        {loading ? (
          <Loader active inline />
        ) : (
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Email Address</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map((user, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{user.uid}</Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    <Button
                      primary
                      as={Link}
                      to={{
                        pathname: `${ROUTES.ADMIN_USERS}/${user.uid}`,
                        state: { user }
                      }}
                    >
                      Details
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
        <Divider horizontal section>
          New User
        </Divider>
        <SignUpLink />
   
      </div>
    );
  }
}

class UserItemBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: null,
      ...props.location.state
    };
  }

  componentDidMount() {
    if (this.state.user) {
      console.log("State user: ", this.state.user);
      return;
    }

    this.setState({ loading: true });

    this.unsubscribeUser =this.props.firebase
      .user(this.props.match.params.id)
      .onSnapshot(snapshot => {
        this.setState({
          user: snapshot.data(),
          loading: false
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribeUser && this.unsubscribeUser();
  //  this.props.firebase.user().off();
  }

  onSendPasswordResetEmail = () => {
    this.props.firebase.doPasswordReset(this.state.user.email);
  };

  render() {
    const { user, loading } = this.state;

    return (
      <>
        <Card fluid={true}>
          {loading ? (
            <Loader active inline="centered" />
          ) : (
            <Card.Content>
              <Card.Header>User: {user.uid}</Card.Header>
              <Card.Description>
                {user && (
                  <div>
                    <Card.Content>
                      <Card.Meta>
                        <span>Username: {user.username}</span>
                      </Card.Meta>
                      <Card.Description>{user.email}</Card.Description>
                      <br />
                      <Button
                        primary
                        type="button"
                        onClick={this.onSendPasswordResetEmail}
                      >
                        Send Password Reset
                      </Button>
                    </Card.Content>
                  </div>
                )}
              </Card.Description>
            </Card.Content>
          )}
        </Card>
      </>
    );
  }
}
// class SensorTypeItemBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       type: null,
//       ...props.location.state
//     };
//   }

//   componentDidMount() {
//     // if (this.state.user) {
//     //   console.log("State user: ", this.state.user);
//     //   return;
//     console.log("jestem",this.state)
//     }

//   //   this.setState({ loading: true });

//   //   this.props.firebase
//   //     .user(this.props.match.params.id)
//   //     .on("value", snapshot => {
//   //       this.setState({
//   //         user: snapshot.val(),
//   //         loading: false
//   //       });
//   //     });
//   // }

//   // componentWillUnmount() {
//   //   this.props.firebase.user(this.props.match.params.id).off();
//   // //  this.props.firebase.user().off();
//   // }

//   // onSendPasswordResetEmail = () => {
//   //   this.props.firebase.doPasswordReset(this.state.user.email);
//   // };

//   render() {
//     const {  loading } = this.state;
   

//     return (
//       <>
//          <h2>Sensor types</h2>
//         <Card fluid={true}>
//           {loading ? (
//             <Loader active inline="centered" />
//           ) : (
//             <Card.Content>
//               <Card.Header>Sensor Type: {this.state.type.uid} </Card.Header>
//               <Card.Description>
//                 {/* {user && (
//                   <div>
//                     <Card.Content>
//                       <Card.Meta>
//                         <span>Username: {user.username}</span>
//                       </Card.Meta>
//                       <Card.Description>{user.email}</Card.Description>
//                       <br />
//                       <Button
//                         primary
//                         type="button"
//                         onClick={this.onSendPasswordResetEmail}
//                       >
//                         Send Password Reset
//                       </Button>
//                     </Card.Content>
//                   </div>
//                 )} */}
//               </Card.Description>
//             </Card.Content>
//           )}
//         </Card>
//       </>
//     );
//   }
// }
const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);
//const SensorTypeItem = withFirebase(SensorTypeItemBase);

const condition = authUser =>
  // authUser && authUser.roles.includes(ROLES.ADMIN);
  authUser && authUser.isAdmin;

export default compose(withAuthorization(condition))(AdminPage);
