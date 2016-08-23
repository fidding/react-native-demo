import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// pages
import User from './User';
import AboutMe from './AboutMe';

// normal style template
let STYLES = require('../css/Normal');

// screen height and width
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

class Login extends React.Component {
    /*
    * init
    */
    constructor(props) {
	    super(props);
	    this.state = {
	        name: null,
            password: null,
            error: false
	    };
    }

    /*
     * open user page
     */
    openUserPage() {
        //if (!this.state.name || !this.state.password) {
            this.setState({error: true});
        //} else {
	        this.props.navigator.push({
                title: 'User Center',
	            component: User,
	            params: {
		            name: this.state.name
	            }
	        });
        //}

    }

    /*
     * open aboutme page
     */
    openAboutMePage() {
        this.props.navigator.push({
            title: 'About Me',
            component: AboutMe
        });
    }

    /**
     * error message
     */
    error() {
        return this.state.error ? 'Username or password can not be empty!' : ' ';
    }

    render() {
	    return (
	        <View style={STYLES.container}>
                <View style={STYLES.header}>
                    <Text style={[STYLES.textWhite, STYLES.textCenter]}>
                        <Text style={[STYLES.textBold, STYLES.text40]}>Fidding{'\n'}</Text>
                        <Text style={[STYLES.text16]}>
                            {'\n'}
                            &nbsp; a  simple react-native demo for beginners &nbsp;
                        </Text>
                    </Text>
                </View>
                <View style={STYLES.bodyer}>
                    <View>
                        <Text style={[STYLES.textError, STYLES.textCenter]}>
                            {this.error()}
                        </Text>
                    </View>
                    <View style={[styles.inputBox, STYLES.radius25, STYLES.mt20]}>
                        <Icon name="user" size={23} color="white" />
                        <TextInput
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                            placeholder={'Username'}
                            placeholderTextColor="white"
                            style={[styles.input]}
                            selectionColor="white"
                        />
                    </View>
                    <View style={[styles.inputBox, STYLES.radius25, STYLES.mt20]}>
                        <Icon name="lock" size={23} color="white" />
                        <TextInput
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder={'Password'}
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            style={[styles.input]} />
                    </View>
                    <TouchableOpacity style={[STYLES.mt30, STYLES.radius25, STYLES.buttonGreen, styles.loginSubmit]} onPress={this.openUserPage.bind(this)}>
                            <Text style={[STYLES.textWhite, STYLES.textCenter, STYLES.text20]}>Get Started</Text>
                    </TouchableOpacity>
                    <View style={[styles.loginMore, STYLES.mt20]}>
                        <TouchableOpacity style={STYLES.flex1}>
                            <Text style={[STYLES.pl20, STYLES.textWhite]}>Create Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={STYLES.flex1} onPress={this.openAboutMePage.bind(this)}>
                            <Text style={[STYLES.pr20, STYLES.textWhite, STYLES.textRight]}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
	    );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        width: windowWidth - 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6ad1a9'
    },
    input: {
        width: windowWidth - 140,
        backgroundColor: '#6ad1a9',
        borderColor: '#fff',
        borderWidth: 1,
        color: 'white',
        opacity: 0.9,
        fontSize: 16,
        paddingLeft: 20
    },
    loginSubmit: {
        width: windowWidth - 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginMore: {
        flexDirection: 'row',
        height: 20,
        overflow: 'hidden'
    }
});

export default Login;
