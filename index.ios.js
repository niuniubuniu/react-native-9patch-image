import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';


class NinePatchView extends Component {
  render() {
    const { source, children, rest} = this.props
    return (
      <View {...rest}>
        <Image
          source={source}
          style={styles.capInset}
          resizeMode='stretch'
        />
        {children}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  capInset: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
export default NinePatchView;
