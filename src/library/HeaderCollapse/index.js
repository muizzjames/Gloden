import React, { PropTypes } from 'react';
import tweenState from 'react-tween-state';

import { StyleSheet, View, Text } from 'react-native';

var HeaderCollapse = React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    animationDuration: React.PropTypes.number,
    content1: React.PropTypes.element,
    content2: React.PropTypes.element,
    content3: React.PropTypes.element,
    easing: React.PropTypes.string,
    expanded1: React.PropTypes.bool,
    expanded2: React.PropTypes.bool,
    expanded3: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      animationDuration: 800,
      easing: 'linear',
      expanded1: true,
      expanded2: true,
      expanded3: true,
      content1: null,
      content2: null,
      content3: null,
      backgroundColor:"#FFFFFF"
    };
  },

  getInitialState() {
    return {
      status: 0,
      height1: 0,
      content_height1: 0,
      height2: 0,
      content_height2: 0,      
      height3: 0,
      content_height3: 0,
    };
  },

  toggle(arrow) {    
    if(arrow === 'up'){        
        switch(this.state.status){
          case 0:
            break;
          case 1:
            this.tweenState('height1', {
              easing: tweenState.easingTypes[this.props.easing],
              duration: this.props.animationDuration,
              endValue: this.state.height1 === 0 ? this.state.content_height1 : 0
            });
            this.state.status = 0;            
            break;
          case 2:
            this.tweenState('height2', {
              easing: tweenState.easingTypes[this.props.easing],
              duration: this.props.animationDuration,
              endValue: this.state.height2 === 0 ? this.state.content_height2 : 0
            });
            this.state.status = 1;            
            break;
          case 3:            
            this.tweenState('height3', {
              easing: tweenState.easingTypes[this.props.easing],
              duration: this.props.animationDuration,
              endValue: this.state.height3 === 0 ? this.state.content_height3 : 0
            });
            this.state.status = 2;
            break;
          default:
            break;

      }      
    }
    
    if(arrow === 'down'){      
      switch(this.state.status){
        case 0:
          this.tweenState('height1', {
            easing: tweenState.easingTypes[this.props.easing],
            duration: this.props.animationDuration,
            endValue: this.state.height1 === 0 ? this.state.content_height1 : 0
          });
          this.state.status = 1;
          break;
        case 1:
          this.tweenState('height2', {
              easing: tweenState.easingTypes[this.props.easing],
              duration: this.props.animationDuration,
              endValue: this.state.height2 === 0 ? this.state.content_height2 : 0
            });
          this.state.status = 2;          
          break;
        case 2:
          this.tweenState('height3', {
            easing: tweenState.easingTypes[this.props.easing],
            duration: this.props.animationDuration,
            endValue: this.state.height3 === 0 ? this.state.content_height3 : 0
          });
          this.state.status = 3;          
          break;
        case 3:          
          break;
        default:
          break;
      }
    }
    
  },

  _getContentHeight() {
    if (this.refs.Content1) {
      this.refs.Content1.measure((ox, oy, width, height, px, py) => {
        this.setState({
          height1: this.props.expanded1 ? height : 0,
          content_height1: height
        });
      });
    }

    if (this.refs.Content2) {
      this.refs.Content2.measure((ox, oy, width, height, px, py) => {
        this.setState({
          height2: this.props.expanded2 ? height : 0,
          content_height2: height
        });
      });
    }

    if (this.refs.Content3) {
      this.refs.Content3.measure((ox, oy, width, height, px, py) => {
        this.setState({
          height3: this.props.expanded3 ? height : 0,
          content_height3: height
        });
      });
    }
  },

  componentDidMount() {
    setTimeout(this._getContentHeight);
  },

  componentWillReceiveProps(nextProps) {
    // if(nextProps.scrollPos !== this.props.scrollPos){
      this.toggle(nextProps.scrollPos);
    // }
  },

  render() {
    return (
      <View style={{ overflow: 'hidden', backgroundColor: this.props.backgroundColor }} >
        <View style={{ height: this.getTweeningValue('height3'), overflow: 'scroll' }} >
          <View ref="Content3">
            {this.props.content3}
          </View>
        </View>
        <View style={{ height: this.getTweeningValue('height1'), overflow: 'scroll' }} >
          <View ref="Content1">
            {this.props.content1}
          </View>
        </View>
        <View style={{ height: this.getTweeningValue('height2'), overflow: 'scroll' }} >
          <View ref="Content2">
            {this.props.content2}
          </View>
        </View>
      </View>
    );
  }
});

module.exports = HeaderCollapse;