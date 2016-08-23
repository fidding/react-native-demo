import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ListView,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// pages
import Login from './Login';

// normal style template
let STYLES = require('../css/Normal.js');

// screen height and width
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

class User extends React.Component {
    constructor(props) {
	    super(props);

        // init : new a datasource objec
        var ds =new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,

            // if use sectionData
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

	    this.state = {
            dataSource: ds,
            dataObject: {
                //article list
                article: [
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    },
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    },
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    },
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    },
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    },
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    },
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    },
                    {
                        title: 'Donald Trump likes to promise that details are coming in a couple of weeks. Do they?',
                        author: 'fidding'
                    }
                ]
            }
	    };
    }

    /**
     * article list view
     */
    renderArticle (rowData, sectionId, rowId) {
        if(sectionId == 'article'){
            return (
                <View>
                    <View style={[styles.listBody, STYLES.pl20]}>
                        <Text style={[STYLES.textBlack, STYLES.textBold]}>{rowData.title}</Text>
                    </View>
                    <View style={[styles.listFooter, STYLES.pl20]}>
                        <Text style={[STYLES.textBlack]}>
                            <Icon name="user" size={14} color="#1a9b7f"/>
                            &nbsp;&nbsp;{rowData.author}
                        </Text>
                    </View>
                </View>
            );
        }
        return false;
    }

    render() {
	    return (
            <ScrollView>
                <View>
                    <Image
                        source={require('../img/banner2.jpg')}
                        style={[styles.banner]}>
                        <Text style={[STYLES.textWhite, STYLES.text30, STYLES.textBold, STYLES.textCenter]}>
                            welcome, {this.props.name} !
                        </Text>
                    </Image>
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.dataObject)}
                        renderRow={(rowData, sectionId, rowId) => this.renderArticle(rowData, sectionId, rowId)}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
	    );
    }
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: windowWidth,
        height: 200
    },
    listBody: {
        paddingTop: 20,
        paddingBottom: 10
    },
    listFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingRight: 30,
        paddingBottom: 20,
        borderBottomColor: '#aaa',
        borderBottomWidth: 0.5
    }
});

export default User;
