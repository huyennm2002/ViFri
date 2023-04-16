import { Button, View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { React, useState, useCallback } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import DismissKeyboardView from '../components/DismissKeyboardView.jsx';
import Header from '../components/Header.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  brandname: {
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 30,
    marginLeft: 20,
  },
  dropdown: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 300
  },
  dropdownHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  inputContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    margin: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
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
    <View style={{ flex: 1 }}>
      <Header></Header>
      <DismissKeyboardView style={styles.container}>
        <SafeAreaView >
          <Text style={styles.brandname}>Update Info</Text>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                placeholder="First name"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                placeholder="Last name"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input}
                placeholder="Email"
              />
            </View>
            <View style={styles.dropdown}>
              <Text style={styles.dropdownHeader}>Days before expiration</Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={offsetValues}
                save="value"
                label="Categories"
                defaultOption={{ label: "1", value: "1" }}
                search={false}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </DismissKeyboardView>
    </View>

  )
}

export default ProfileScreen