//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Contacts from 'react-native-contacts';

// create a component
class Home extends Component {
  // Define States
  state = {
    modalVisible: false,
  };
  // Get Contacts
  handleOnPress = async () => {
    console.log('Pressed Test');
    Contacts.checkPermission().then((permission) => {
      // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
      if (permission === 'undefined') {
        Contacts.requestPermission().then((permission) => {
          console.log('requesting');
        });
      }
      if (permission === 'authorized') {
        Contacts.getAll()
          .then((contacts) => {
            if (contacts.length > 0) {
              this.setState({modalVisible: true});
            }
          })
          .catch((error) => console.error(error));
      }
      if (permission === 'denied') {
        console.log('nay');
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.getContactsButton}
          onPress={() => this.handleOnPress()}>
          <Text style={styles.getContactsButtonText}>Get Contacts</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  getContactsButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#3694ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getContactsButtonText: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

//make this component available to the app
export default Home;
