import { Button, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import {React, useState, useCallback} from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import  DismissKeyboardView  from '../components/DismissKeyboardView.jsx';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center"
    },
    textinput: {
      padding: 10,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      backgroundColor: '#f2f2f2',
      borderRadius: 23,
      margin: 15,
      width: 290,
      fontSize: 20,
      height: 60
    },
    brandname: {
      fontWeight: 'bold',
      fontSize: 36,
      margin: 10
    },
    dropdown: {
      paddingHorizontal:10,
      paddingVertical: 10,
      width:300
    },
    dropdownHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom:10
    }
  });
   
const ProfileScreen = () => {
    const offsetValues = [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ]
    const [selected, setSelected] = useState("");
    return (
      <DismissKeyboardView style={styles.container}>
        <SafeAreaView >
        <Text style={styles.brandname}>Update info</Text>
        <TextInput style={styles.textinput}
                placeholder="Username"
            />
        <TextInput style={styles.textinput}
                placeholder="Email"
            />
        <View style={styles.dropdown}>
          <Text style={styles.dropdownHeader}>Days before expiration</Text>
          <SelectList 
          setSelected={(val) => setSelected(val)}  
          data={offsetValues} 
          save="value"
          label="Categories"
          defaultOption={ {label: "1", value: "1" }}
          search={false}
          />
        </View>
        <Button
            title="Submit"
        />
        </SafeAreaView>
      </DismissKeyboardView>
      
     )
   }

export default ProfileScreen