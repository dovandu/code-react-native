import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { Images, Metrics } from '../Themes'
import FastImage from 'react-native-fast-image'

export default class PlaceHolderFastImage extends Component {
  constructor(props){
    super(props)

    this.state = {
      loaded: false,
      style: StyleSheet.flatten(props.style)
    }
  }

  onLoadEnd(){
    this.setState({loaded: true})
  }

  render() {
    const top = (this.state.style.height / 2) - 15
    const left = this.state.style.width == 'auto' ? (Metrics.screenWidth / 2 - 30) : (this.state.style.width / 2 - 15)

    return <View style={this.props.style}>
      {
        !this.state.loaded &&
        <View>
          <FastImage 
            source={Images.placeholder}
            style={this.props.style}
          />
          <View style={{
            position:'absolute',
            top: top,
            left: left}}>
            <ActivityIndicator size="large" color="#ccc" />
          </View>
        </View>
      }
      <FastImage 
        source={this.props.source}
        style={[this.props.style, this.state.loaded ? {} : {width: 0, height: 0}]}
        onLoadEnd={this.onLoadEnd.bind(this)}
      />
    </View>
  }
}
