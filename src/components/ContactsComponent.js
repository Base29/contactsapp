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
  console.log('Main Props', props);
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
            <Text>{contact.phoneNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const SingleContact = (props) => {
    console.log('Single Props', props);
    return (
      <View>
        <Text>{phoneNumber}</Text>
        <Pressable
          onPress={() => {
            setContactsVisible(true);
          }}>
          <Text>Choose another</Text>
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
    return <SingleContact phoneNumber={phoneNumber} />;
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
});

//make this component available to the app
export default ContactsComponent;
