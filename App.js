/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ToastAndroid, Linking } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import Input from "./components/input";
import Button from "./components/button";

export default class App extends Component {
  state = {
    califications: [{
      id: 1,
      value: 0,
      defaultValue: 3.0,
      rate: 0.3
    },
    {
      id: 2,
      value: 0,
      defaultValue: 3.0,
      rate: 0.3
    },
    {
      id: 3,
      value: 0,
      defaultValue: 3.0,
      rate: 0.4
    }],
    result: ""
  }
  handleCalc = () => {
    let total = 0;
    this.state.califications.forEach((item) => {
      total += (item.value * item.rate)
    })
    this.setState({ result: this.parseResult(total) })
    //ToastAndroid.show("THis a message", 5)
  }

  parseResult = (value) => {
    value = value.toFixed(1)
    if(value < 3){
      return `😢  Sacas ${value} en la materia`
    } else if (value == 3){
      return `😬 Sacas ${value} en la materia`
    } else if (value > 3 && value <= 4){
      return `😁 Sacas ${value} en la materia`
    }else if (value > 4 && value <= 5){
      return `😎 Sacas ${value} en la materia`
    }

  }

  openBrowser = (url, text) => {
    Linking.openURL(url)
  }

  updateDefaultValue = (item) => {
    let adition = 0
    const nextId = (item.id + 1)
    this.state.califications.filter(_item => _item.id !== nextId).map((_item) => {
      if (_item.id == item.id) {
        adition += parseFloat(_item.value) * _item.rate
      } else if (_item.id > item.id) {
        _item.value = 0
        _item.defaultValue = 3.0
        adition += parseFloat(_item.defaultValue) * _item.rate
      }
      return _item
    })
    let califications = this.state.califications.map((_item) => {
      if (_item.id == nextId) {
        _item.value = 0
        _item.defaultValue = (3 - adition) / _item.rate
      }
      return _item
    })
    this.setState({ califications })
  }

  onChangeText = (item, value) => {
    let califications = this.state.califications.map((_item) => {
      if (_item.id == item.id) {
        _item.value = value
      }
      return _item
    })
    this.setState({ califications }, () => this.updateDefaultValue(item))
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View>

        </View>
        <View style={{ height: "50%", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.floatBox}>
          </View>
          <Text style={styles.title}>Calcula tus Notas</Text>
          <View>
            {
              this.state.califications.map((item, index) => <Input key={index} onChangeText={(value) => this.onChangeText(item, value)} rate={item.rate} value={item.value} defaultValue={item.defaultValue} />)
            }
          </View>
          <Button onClick={this.handleCalc} />
          <Text style={styles.lblResult}>
            {this.state.result}
          </Text>
        </View>
        <View>
          <Hyperlink
            onPress={this.openBrowser}
            linkStyle={{ textDecorationLine: "underline" }}
            linkText={url => url === 'https://github.com/antablack' ? 'Antablack' : url}>
            <Text style={{ marginBottom: 5, textAlign: "center", fontFamily: "courier", fontSize: 15, fontWeight: "bold" }}>
              Development by https://github.com/antablack
            </Text>
          </Hyperlink>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lblResult: {
    fontFamily: "courier",
    fontSize: 15,
    marginTop: 20,
    height: 20
  },
  floatBox: {
    backgroundColor: "#571B1B",
    borderRadius: 50,
    width: "100%",
    height: "43%",
    position: "absolute",
    top: -50,
    left: -35,
    transform: [{ rotate: "35deg" }]
  },
  title: {
    color: "#fff",
    fontFamily: "courier",
    fontSize: 25,
    fontWeight: "bold",
  }
})