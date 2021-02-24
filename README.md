# Contacts Application (React Native)

![](https://img.shields.io/david/emiketic/helloworld-react-native.svg?style=for-the-badge)

This is a simple application developed using React Native (version 0.63.x). The purpose of this application is to fetch the contacts from a user's device and display a list of available contacts and when a contact is selected then hide the list of contacts and show the phone number of the selected contact.

## Technology

- [React](https://reactjs.org/) + [React Native](https://facebook.github.io/react-native/)
- [React Native Contacts](https://www.npmjs.com/package/react-native-contacts)

## Requirements

- [Node.js v12+](https://nodejs.org/)
- [React Native CLI](https://www.npmjs.com/package/react-native-cli) (`npx -g install react-native-cli`)
- Xcode Command Line tools (`xcode-select --install`)
- [CocoaPods](https://cocoapods.org/) (`gem install cocoapods`)
- [xcpretty](https://github.com/supermarin/xcpretty) (`gem install xcpretty`)
- [Bash v4](http://tldp.org/LDP/abs/html/bashver4.html) (default on GNU/Linux, `brew install bash` on macOS)

## Usage

```sh
# install dependencies
npm install

# run on Android device/emulator
npx react-native run-android

# run on iOS device/simulator
npx react-native run-ios
```
