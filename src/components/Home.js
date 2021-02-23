//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
class Home extends Component {
  // Get device contacts
  handleOnPress = () => {
    console.log('Pressed');
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
});

//make this component available to the app
export default Home;
