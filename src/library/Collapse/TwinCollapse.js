import React, { PropTypes } from 'react';
import tweenState from 'react-tween-state';
import Triangle from 'react-native-triangle';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text
} from 'react-native';

var Accordion = React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    activeOpacity: React.PropTypes.number,
    animationDuration: React.PropTypes.number,
    content: React.PropTypes.element.isRequired,
    easing: React.PropTypes.string,
    expanded: React.PropTypes.bool,
    header: React.PropTypes.element.isRequired,
    onPress: React.PropTypes.func,
    underlayColor: React.PropTypes.string,
    style: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      activeOpacity: 1,
      animationDuration: 300,
      easing: 'linear',
      expanded: false,
      underlayColor: '#000',
      style: {}
    };
  },

  getInitialState() {
    return {
      is_visible: false,
      height: 0,
      content_height: 0
    };
  },

  close() {
    this.state.is_visible && this.toggle();
  },

  open() {
    !this.state.is_visible && this.toggle();
  },

  toggle() {
    this.state.is_visible = !this.state.is_visible;
    this.tweenState('height', {
      easing: tweenState.easingTypes[this.props.easing],
      duration: this.props.animationDuration,
      endValue: this.state.height === 0 ? this.state.content_height : 0
    });
  },

  _onPress() {
    this.toggle();
    if (this.props.onPress) {
      this.props.onPress.call(this);
    }
  },

  _getContentHeight() {
    if (this.refs.AccordionContent) {
      this.refs.AccordionContent.measure((ox, oy, width, height, px, py) => {
        // Sets content height in state
        this.setState({
          height: this.props.expanded ? height : 0,
          content_height: height
        });
      });
    }
  },

  componentDidMount() {
    setTimeout(this._getContentHeight);
  },

  render() {
    return (
      <View style={{ overflow: 'hidden' }} >
        <TouchableHighlight
          ref="AccordionHeader"
          onPress={this._onPress}
          underlayColor={this.props.underlayColor}
          style={this.props.style,
            {marginBottom: this.state.is_visible === true ? 0 : this.props.bottomWidth,}}
        >
          {this.props.header}
        </TouchableHighlight>
        <View
          ref="AccordionContentWrapper"
          style={{
            height: this.getTweeningValue('height'),
            overflow: 'scroll',
            marginTop: this.state.is_visible === true ? -this.props.bottomWidth : 0,
          }}
        >
          <View ref="AccordionContent">
            { this.state.is_visible === true ? <Triangle
              width={12}
              height={7}
              style={{ marginLeft: 20 }}
              color={this.props.underlayColor}
              direction={'down'}
            /> : null }            
            {this.props.content}
          </View>
        </View>
      </View>
    );
  }
});

module.exports = Accordion;