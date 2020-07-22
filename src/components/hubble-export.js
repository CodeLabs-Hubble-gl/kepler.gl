import React, {Component} from 'react';
import {ThemeProvider, withTheme} from 'styled-components';

import {connect as keplerGlConnect} from 'connect/keplergl-connect';
import RenderSettingsModal from 'hubble.gl';
import {Button} from 'components/common/styled-components';
import {theme} from '../styles';


// TODO this isn't DRY. Comes from https://github.com/keplergl/kepler.gl/blob/995024e86880fefb0624af4ed1e98d3879558336/src/components/kepler-gl.js
function mapStateToProps(state = {}, props) {
    return {
      ...props,
      visState: state.visState,
      mapStyle: state.mapStyle,
      mapState: state.mapState,
      uiState: state.uiState,
      providerState: state.providerState
    };
}

function makeMapDispatchToProps() {
    // const getActionCreators = makeGetActionCreators();
    const mapDispatchToProps = (dispatch, ownProps) => {
    //   const groupedActionCreators = getActionCreators(dispatch, ownProps);
  
      return {
        // ...groupedActionCreators,
        dispatch
      };
    };
  
    return mapDispatchToProps;
}

class HubbleExport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
  // To be used to store all modal components & functions 
//   this.states = [ // React props
//       keyframes: abstraction of keyframes,
//       dlsjkas,
//   ]
    handleExport() {
        this.setState(state => ({
            isOpen: !state.isOpen
          }));
        console.log("Reached")
        
        // stop rendering in bg
        // setState
        // pop up modal if isOpen. If false, closes modal TODO put function into render
        // all the data is passed through and can use in deck/hubble components
        return <h1>REACHED</h1>
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ThemeProvider theme={RenderSettingsModal}></ThemeProvider>
                <Button onClick={this.handleExport}>Export</Button>
            </div>
        )
    }
};

// States we need:
// 
// 
// 
export default keplerGlConnect(mapStateToProps, makeMapDispatchToProps)(withTheme(HubbleExport));

