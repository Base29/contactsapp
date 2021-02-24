//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Contacts from 'react-native-contacts';
import ContactsComponent from './ContactsComponent';

// create a component
class Home extends Component {
  // Define States
  state = {
    showModal: false,
    contacts: [],
    contactsVisibility: false,
  };

  componentDidMount = () => {
    this.handleOnPress();
  };
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
              this.setState({ contactsVisibility: true });
              for (const recordID in contacts) {
                const contactData = {};
                contactData.id = contacts[recordID].recordID;
                contactData.name = `${contacts[recordID].givenName} ${contacts[recordID].familyName}`;
                contactData.phoneNumber =
                  contacts[recordID].phoneNumbers[0].number;
                contactData.thumbnailPath = contacts[recordID].thumbnailPath;

                this.state.contacts.push(contactData);
              }
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
    const { contacts, contactsVisibility } = this.state;
    const newArray = [];

    // Removing duplicates
    contacts.forEach((obj) => {
      if (!newArray.some((o) => o.name === obj.name)) {
        newArray.push({ ...obj });
      }
    });
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.getContactsButtonContainer}>
          <TouchableOpacity
            style={styles.getContactsButton}
            onPress={() => this.handleOnPress()}>
            <Text style={styles.getContactsButtonText}>Get Contacts</Text>
          </TouchableOpacity>
        </View>
        {contactsVisibility ? (
          <View style={styles.contactsView}>
            <ContactsComponent contacts={newArray} hideContacts={true} />
          </View>
        ) : (
          <View />
        )}
      </SafeAreaView>
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
  getContactsButtonContainer: {
    flex: 0.3,

    flexDirection: 'row',
  },
  getContactsButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#3694ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  getContactsButtonText: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  contactsView: {
    flex: 1,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default Home;
