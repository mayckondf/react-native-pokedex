/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

class RotationView extends Component {
  constructor(props) {
    super(props);
    this.state = { spinAnim: new Animated.Value(0) };
  }

  componentDidMount() {
    const { spinAnim } = this.state;
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }

  render() {
    const { spinAnim } = this.state;
    const { children } = this.props;
    const spin = spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        {children}
      </Animated.View>
    );
  }
}

RotationView.propTypes = {
  children: PropTypes.any.isRequired,
};

export default RotationView;
