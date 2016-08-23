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

import Icon from 'react-native-vector-icons/FontAwesome';

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
                    <Text style={{color: "white", fontSize: 30}}>Hello, I am fidding{'\n\n'}</Text>
                    <Text style={[STYLES.text16, STYLES.textWhite]}>
                        <Text >
                            <Icon name="envelope" size={18} color="#ffffff"/>
                            &nbsp;&nbsp; 395455856@qq.com{'\n\n'}
                        </Text>
                        <Text>
                            <Icon name="chain" size={18} color="#ffffff"/>
                            &nbsp;&nbsp; http://www.fidding.me{'\n\n'}
                        </Text>
                        <Text >
                            <Icon name="github" size={18} color="#ffffff"/>
                            &nbsp;&nbsp; https://github.com/fidding{'\n\n'}
                        </Text>
                    </Text>
                </View>
            </View>
	    );
    }
}

const styles = StyleSheet.create({
});

export default AboutMe;
