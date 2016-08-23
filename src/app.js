import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Navigator,
    View,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './Login';

const defaultRoute = {
    title: '',
    component: Login
};

class navigation extends Component {
    _renderScene(route, navigator) {
        let Component = route.component;
        if(Component){
            return (
                <Component {...route.params} navigator={navigator} />
            );
        }
        return false;
    }
    _renderNavBar() {
        const styles = {
            navbar: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00c497',
                shadowOffset:{
                    width: 1,
                    height: 0.5
                },
                shadowColor: '#55ACEE',
                shadowOpacity: 0.8
            },
            logo: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                color: '#FFFFFF',
                fontWeight: 'bold'
            },
            title: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            button: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: 50
            },
            buttonText: {
                fontSize: 18,
                color: '#FFFFFF',
                fontWeight: '400',
                textAlign: 'center'
            }
        };

        var routeMapper = {
            LeftButton(route, navigator, index, navState) {
                if(index > 0) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Icon name="chevron-left" size={23} color="white" />
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={[styles.logo]}>F</Text>
                        </TouchableOpacity>
                    );
                }
            },
            RightButton(route, navigator, index, navState) {
                if(index > 0 && route.rightButton) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity>
                    );
                } else {
                    return null;
                }

            },
            Title(route, navigator, index, navState) {
                return (
                    <View style={styles.title}>
                        <Text style={styles.buttonText}>{route.title ? route.title : ''}</Text>
                    </View>
                );
            }
        };

        return (
            <Navigator.NavigationBar
            style={styles.navbar}
            routeMapper={routeMapper}
            />
        );
    }
    render() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this._renderScene}
                sceneStyle={{paddingTop: (Platform.OS === 'android' ? 55 : 60)}}
                navigationBar={this._renderNavBar()}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('ReactNativeLogin', () => navigation);
