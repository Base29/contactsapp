//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const placeHolderImage = require('./assets/placeholder.jpg');
const renderContact = (contact, key) => {
  return (
    <TouchableOpacity style={styles.contactContainer} key={key}>
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
// create a component
const ContactsComponent = (props) => {
  console.log(props);
  return (
    <ScrollView>
      {props.contacts.map((contact, key) => renderContact(contact, key))}
    </ScrollView>
  );
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
