import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, styles.firstLetter]}>V</Text>
                    <Text style={[styles.title, styles.secondLetter]}>i</Text>
                    <Text style={[styles.title, styles.thirdLetter]}>F</Text>
                    <Text style={[styles.title, styles.fourthLetter]}>r</Text>
                    <Text style={[styles.title, styles.fifthLetter]}>i</Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={[styles.icon, styles.centerIcon]}>
                    <Icon name="search" type="font-awesome" color="white" size={22} style={{ marginLeft: 4, marginRight: 4 }} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.icon, styles.centerIcon]}>
                    <Icon name="plus" type="font-awesome" color="white"  size={22} style={{ marginLeft: 4, marginRight: 4 }}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.icon, { marginRight: 8 }]}>
                    <Icon name="bell" type="font-awesome" color="white" size={22} style={{ marginLeft: 4, marginRight: 4 }}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    titleContainer: {
        marginLeft: 4,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'Baskerville',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    firstLetter: {
        marginRight: 6,
    },
    secondLetter: {
        marginRight: 8,
        marginLeft: -2,
    },
    thirdLetter: {
        marginRight: 8,
        marginLeft: -2,
    },
    fourthLetter: {
        marginRight: 8,
        marginLeft: -2,
    },
    fifthLetter: {
        marginLeft: -2,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        padding: 5,
    },
    centerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Header;