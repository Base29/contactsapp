//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Contacts from 'react-native-contacts';
import ContactsComponent from './ContactsComponent';

// create a component
class Home extends Component {
  // Get Contacts
  handleOnPress = async () => {
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
        <ContactsComponent />
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
});

//make this component available to the app
export default Home;
