//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';

const placeHolderImage = require('./assets/placeholder.jpg');

// create a component
const ContactsComponent = (props) => {
  // Declaring props
  const [contactsVisible, setContactsVisible] = useState(true);
  const [singleContactVisible, setSingleContactVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const renderContact = (contact, key) => {
    return (
      <TouchableOpacity
        style={styles.contactContainer}
        key={key}
        onPress={() => {
          setContactsVisible(false);
          setSingleContactVisible(true);
          setPhoneNumber(contact.phoneNumber);
        }}>
        <View style={styles.logoView}>
          <Image
            style={styles.tinyLogo}
            source={
              contact.thumbnailPath !== ''
                ? contact.thumbnailPath
                : placeHolderImage
            }
          />
        </View>
        <View>
          <View style={{ paddingBottom: 5 }}>
            <Text>{contact.name}</Text>
          </View>

          <View>
            <Text>
              {contact.phoneNumber} ({contact.phoneNumberType})
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // Component to show single contact phonenumber
  const SingleContact = ({ contactPhoneNumber }) => {
    return (
      <View>
        <Text style={styles.phoneNumberText}>{contactPhoneNumber}</Text>
        <Pressable
          onPress={() => {
            setContactsVisible(true);
          }}
          style={styles.option}>
          <Text style={styles.optionText}>Choose Another Contact</Text>
        </Pressable>
      </View>
    );
  };

  if (contactsVisible) {
    return (
      <ScrollView>
        {props.contacts.map((contact, key) => renderContact(contact, key))}
      </ScrollView>
    );
  }

  if (singleContactVisible) {
    return <SingleContact contactPhoneNumber={phoneNumber} />;
  }

  return null;
};
// define your styles
const styles = StyleSheet.create({
  contactContainer: {
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logoView: {
    marginRight: 30,
  },
  phoneNumberText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  option: {
    alignItems: 'center',
  },
  optionText: {
    color: '#9e9d9d',
  },
});

//make this component available to the app
export default ContactsComponent;
