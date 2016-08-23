import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

// pages
import Login from './Login';

// normal style template
let STYLES = require('../css/Normal');

// screen height and width
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

class AboutMe extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {
	        name: null,
	        age: null,
            password: null
	    };
    }
    render() {
	    return (
	        <View style={STYLES.container}>
                <View style={STYLES.header}>
                </View>
                <View style={STYLES.bodyer}>
                    <Text style={{color: "white", fontSize: 30}}>Hello, I am fidding</Text>
                </View>
            </View>
	    );
    }
}

const styles = StyleSheet.create({
});

export default AboutMe;
