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
  //  loading: false,
    // sensors: [],
    // sensorTypes: [],
    // actuatorTypes: [],
    // actuators: [],
    // sensorName: "",
    // sensorTypeID: "",
    // sensorCheck: false,
    // actuatorName: "",
    // actuatorTypeID: "",
    // open: false,
    // addSensorVisible: false,
    // addSensorLoading: false,
    // addActuatorVisible: false,
    // addActuatorLoading: false
  };

  componentDidMount() {
    // this.onListenSensors();
    // this.onListenActuators();
  }

  componentWillUnmount() {
    // this.unsubscribeSensors();
    // this.unsubscribeActuators();
    // this.unsubscribeSensorTypes && this.unsubscribeSensorTypes();
    // this.unsubscribeActuatorTypes && this.unsubscribeActuatorTypes();
  }

  // onListenSensors = () => {
  //   this.setState({ loading: true });
  //   this.unsubscribeSensors = this.props.firebase
  //     .sensors(this.props.authUser.uid)
  //     .onSnapshot(snapshot => {
  //       if (snapshot.size) {
  //         let sensorsList = [];
  //         snapshot.forEach(doc =>
  //           sensorsList.push({ ...doc.data(), uid: doc.id })
  //         );
  //         console.log("sensorsList:  ", sensorsList);
  //         // console.log("DATE:  ", new Date(sensorsList[0].readingDate.toDate()).toLocaleString());
  //         this.setState({
  //           sensors: sensorsList,
  //           loading: false
  //         });
  //       } else {
  //         this.setState({ sensors: null, loading: false });
  //       }
  //     });
  // };

  // onListenActuators = () => {
  //   this.setState({ loading: true });
  //   this.unsubscribeActuators = this.props.firebase
  //     .actuators(this.props.authUser.uid)
  //     .onSnapshot(snapshot => {
  //       if (snapshot) {
  //         let actuatorsList = [];
  //         snapshot.forEach(doc =>
  //           actuatorsList.push({ ...doc.data(), uid: doc.id, openModal: false })
  //         );
  //         console.log("actuatorsList:  ", actuatorsList);
  //         this.setState({
  //           actuators: actuatorsList,
  //           loading: false
  //         });
  //       } else {
  //         this.setState({ actuators: null, loading: false });
  //       }
  //     });
  // };
  // onListenSensorTypes = () => {
  //   this.setState({ addSensorLoading: true });
  //   this.unsubscribeSensorTypes = this.props.firebase
  //     .sensorTypes()
  //     .onSnapshot(snapshot => {
  //       if (snapshot) {
  //         let sensorTypesList = [];
  //         snapshot.forEach(doc =>
  //           sensorTypesList.push({
  //             ...doc.data(),

  //             uid: doc.id,
  //             key: doc.id,
  //             text: doc.data().name,
  //             value: doc.id
  //           })
  //         );
  //         console.log("sensorTypesList:  ", sensorTypesList);
  //         this.setState({
  //           sensorTypes: sensorTypesList,
  //           addSensorLoading: false
  //         });
  //       } else {
  //         this.setState({ sensorTypes: null, addSensorLoading: false });
  //       }
  //     });
  // };
  //TU JESTEM FIRESTORE

  // onListenActuatorTypes = () => {
  //   this.setState({ addActuatorLoading: true });
  //   this.unsubscribeActuatorTypes = this.props.firebase
  //     .actuatorTypes()
  //     .onSnapshot(snapshot => {
  //       if (snapshot) {
  //         let actuatorTypesList = [];
  //         snapshot.forEach(doc =>
  //           actuatorTypesList.push({
  //             ...doc.data(),

  //             uid: doc.id,
  //             key: doc.id,
  //             text: doc.data().name,
  //             value: doc.id
  //           })
  //         );
  //         console.log("actuatorTypesList:  ", actuatorTypesList);
  //         this.setState({
  //           actuatorTypes: actuatorTypesList,
  //           addActuatorLoading: false
  //         });
  //       } else {
  //         this.setState({ actuatorTypes: null, addActuatorLoading: false });
  //       }
  //     });
  // };

  // onAddSensor = event => {
  //   event.preventDefault();
  //   const newKey = this.props.firebase.sensors(this.props.authUser.uid).add({
  //     data: 0,
  //     readingDate: this.props.firebase.fieldValue.serverTimestamp(),
  //     name: this.state.sensorName,
  //     type: this.state.sensorTypeID
  //   }).key;
  //   console.log("New key", newKey);
  //   console.log("CLICKED");
  // };

  // onAddActuator = event => {
  //   event.preventDefault();
  //   const actuatorTypeModalindex = this.state.actuatorTypes.find(
  //     type => type.key === this.state.actuatorTypeID
  //   ).modalindex;
  //   this.props.firebase.actuators(this.props.authUser.uid).add({
  //     state: 0,
  //     changingDate: this.props.firebase.fieldValue.serverTimestamp(),
  //     name: this.state.actuatorName,
  //     type: this.state.actuatorTypeID,
  //     typeModalIndex: actuatorTypeModalindex
  //   });
  //   console.log(
  //     "NEW ACTUATORS: ",
  //     this.state.actuatorName,
  //     this.state.actuatorTypeID
  //   );
  //   console.log("find modalindex", actuatorTypeModalindex);
  //   console.log("actuatortypes:", this.state.actuatorTypes);
  //   console.log("CLICKED");
  // };

  // onCreateSensor = event => {
  //   event.preventDefault();
  //   console.log("Clicked", this.state.sensorName);
  // };

  // onChangeText = event => {
  //   this.setState({ sensorName: event.target.value });
  // };

  // onChangeSensorType = (event, {value}) => {
  //   console.log("EVENT", value);
  //  this.setState({sensorTypeID: value})
  // }

  // onChange = (event, result) => {
  //   const { name, value } = result || event.target;
  //   console.log("NAME", name);
  //   console.log("Value", value);
  //   this.setState({ [name]: value });
  // };

  // close = index => {
  //   const actuatorsArray = [...this.state.actuators];
  //   console.log("index", index);
  //   actuatorsArray[index].openModal = false;

  //   this.setState({ actuators: actuatorsArray });
  // };

  // open = index => {
  //   const actuatorsArray = [...this.state.actuators];
  //   console.log("actuatorsArray", actuatorsArray);
  //   actuatorsArray[index].openModal = true;
  //   this.setState({ actuators: actuatorsArray });
  // };

  // toggleState = (uid, state) => {
  //   console.log("modal uid: ", uid, "state: ", state);
  //   if (state === 0) {
  //     this.props.firebase
  //       .actuator(this.props.authUser.uid, uid)
  //       .update({ state: 1 });
  //   } else {
  //     this.props.firebase
  //       .actuator(this.props.authUser.uid, uid)
  //       .update({ state: 0 });
  //   }
  //   this.setState({ open: false });
  // };

  // onAddSensorVisible = () => {
  //   console.log("listen sens types call");
  //   this.onListenSensorTypes();
  //   this.setState({ addSensorVisible: true });
  // };
  // onAddActuatorVisible = () => {
  //   this.onListenActuatorTypes();
  //   this.setState({ addActuatorVisible: true });
  // };

  // onChangeSensorCheck = (event, {checked}) => {
  //   console.log("EVENT", checked);
  //  this.setState({sensorCheck: checked})
  // }

  // onTest = uid => {
  //   console.log("UID", uid);
  //   this.props.firebase.user(uid).update({ isAdmin: true });
  //   //this.props.firebase.sensor(uid,"-LzWWsU5VSAjKdRagP6w").update( {data : 2} );
  // };

  render() {
    const {
      // sensors,
      // actuators,
      // sensorName,
      // actuatorName,
      //loading,
      // sensorTypes,
      // sensorTypeID,
      // actuatorTypeID,
      // actuatorTypes,
      // addSensorVisible,
      // addSensorLoading,
      // addActuatorVisible,
      // addActuatorLoading
    } = this.state;
    // console.log("sensor type ID", sensorTypeID);

    // const getModal = (index, state, uid, i, openModal) => {
    //   const ModalArray = [
    //     <Modal
    //       open={openModal}
    //       closeOnDimmerClick={true}
    //       onClose={() => this.close(i)}
    //       // st={actuator.state}
    //       //content="your state"
    //       trigger={<Button onClick={() => this.open(i)}>Change!</Button>}
    //       basic
    //       size="small"
    //     >
    //       <Header icon="lightbulb outline" content="Change state of actuator" />
    //       <Modal.Content>
    //         <p>Your current state is {state}, would you like change it?</p>
    //       </Modal.Content>
    //       <Modal.Actions>
    //         <Button basic color="red" inverted onClick={() => this.close(i)}>
    //           <Icon name="remove" /> No
    //         </Button>
    //         <Button
    //           color="green"
    //           inverted
    //           onClick={() => this.toggleState(uid, state)}
    //         >
    //           <Icon name="checkmark" /> Yes
    //         </Button>
    //       </Modal.Actions>
    //     </Modal>
    //   ];
    //   return ModalArray[index];
    // };

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
