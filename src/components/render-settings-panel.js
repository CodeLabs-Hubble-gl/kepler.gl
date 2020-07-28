import React, {Component} from 'react';
import styled, {withTheme} from 'styled-components';
import {Button, Input} from 'kepler.gl/components/common/styled-components';
import {Delete} from 'kepler.gl/components/common/icons';
import ItemSelector from 'kepler.gl/components/common/item-selector/item-selector';
import {Scene} from 'components/scene'; 

const DEFAULT_BUTTON_HEIGHT = '32px';
const DEFAULT_BUTTON_WIDTH = '64px';
const DEFAULT_PADDING = '32px';
const DEFAULT_ROW_GAP = '16px';

//Testing
import {DeckScene, CameraKeyframes} from '@hubble.gl/core';
import {easing} from 'popmotion';
import {DeckAdapter} from 'hubble.gl';

function sceneBuilder(animationLoop) {
  const data = {};
  const keyframes = {
    camera: new CameraKeyframes({
      timings: [0, 3000],
      keyframes: [
        {
          longitude: 0,
          latitude: 11,
          zoom: 2,
          pitch: 0,
          bearing: 0
        },
        {
          longitude: 0,
          latitude: 33,
          zoom: 3,
          bearing: 90,
          pitch: 50
        }
      ],
      easings: [easing.easeInOut]
    })
  };
  animationLoop.timeline.attachAnimation(keyframes.camera);

  // TODO: Figure out how to set up the size 
  return new DeckScene({
    animationLoop,
    keyframes,
    lengthMs: 5000,
    data,
   width: 480,
   height: 460
  });
}

const encoderSettings = {
  framerate: 30,
  webm: {
    quality: 0.8
  },
  jpeg: {
    quality: 0.8
  },
  gif: {
    sampleInterval: 1000
  }
};

var _core = require("@hubble.gl/core");
const adapter = new DeckAdapter(sceneBuilder);

function preview() {
  adapter.render(_core.PreviewEncoder, encoderSettings, ()=>{});
}

// TODO:

// Changes Timestamp function
// Camera function (preset keyframes)
// File Name function
// MediaType function
// Quality function
// Set Duration function
// Calculate File Size function
// Render Function

function nop(){

}

const IconButton = styled(Button)`
  padding: 0;
  svg {
    margin: 0;
  }
`;

const PanelCloseInner = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${DEFAULT_PADDING} ${DEFAULT_PADDING} 0 ${DEFAULT_PADDING};
`;

const PanelClose = ({buttonHeight, handleClose}) => (
    // TODO pass in isOpen to false
  <PanelCloseInner className="render-settings-panel__close" >
    <IconButton className="render-settings-button" link onClick={() => {handleClose()}}>
    {/* <IconButton className="render-settings-button" link onClick={nop}> */}
      <Delete height={buttonHeight} />
    </IconButton>
  </PanelCloseInner>
);

const StyledTitle = styled.div`
  color: ${props => props.theme.titleTextColor};
  font-size: 20px;
  font-weight: 400;
  line-height: ${props => props.theme.lineHeight};
`;

const StyledSection = styled.div`
  align-self: center;
  color: ${props => props.theme.labelColor};
  font-weight: 500;
  font-size: 13px;
  margin-top: ${DEFAULT_PADDING};
  margin-bottom: ${DEFAULT_ROW_GAP};
`;

const StyledLabelCell = styled.div`
  align-self: center;
  color: ${props => props.theme.labelColor};
  font-weight: 400;
  font-size: 11px;
`;

const StyledValueCell = styled.div`
  align-self: center;
  color: ${props => props.theme.textColor};
  font-weight: 500;
  font-size: 11px;
  padding: 0 12px;
`;

const PanelBodyInner = styled.div`
  padding: 0 ${DEFAULT_PADDING};
  display: grid;
  grid-template-columns: 480px auto;
  grid-column-gap: 20px;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 88px auto;
  grid-template-rows: repeat(
    ${props => props.rows},
    ${props => (props.rowHeight ? props.rowHeight : '34px')}
  );
  grid-row-gap: ${DEFAULT_ROW_GAP};
`;

const PanelBody = ({props}) => (

  <PanelBodyInner className="render-settings-panel__body">
   
    <div  style={{width: '100%', height: "100%"}}>
       <Scene prop={props} sceneBuilder={sceneBuilder} encoderSettings={encoderSettings} adapter={adapter} /*ref={sce}*//> 
    </div>
    <div>
    <StyledTitle className="render-settings-panel__title">Export Video</StyledTitle>
    <StyledSection>Video Effects</StyledSection>
    <InputGrid rows={2}>
      <StyledLabelCell>Timestamp</StyledLabelCell> {/* TODO add functionality  */}
      <ItemSelector
        selectedItems={['None']}
        options={['None', 'White', 'Black']}
        multiSelect={false}
        searchable={false}
      />
      <StyledLabelCell>Camera</StyledLabelCell> {/* TODO add functionality */}
      <ItemSelector
        selectedItems={['None']}
        options={[
          'None',
          'Orbit (90º)',
          'Orbit (180º)',
          'Orbit (360º)',
          'North to South',
          'South to North',
          'East to West',
          'West to East',
          'Zoom Out'
        ]}
        multiSelect={false}
        searchable={false}
      />
    </InputGrid>
    <StyledSection>Export Settings</StyledSection> {/* TODO add functionality  */}
    <InputGrid rows={3}>
      <StyledLabelCell>File Name</StyledLabelCell>
      <Input placeholder="Video Name" />
      <StyledLabelCell>Media Type</StyledLabelCell> {/* TODO add functionality  */}
      <ItemSelector
        selectedItems={['WebM Video']}
        options={['WebM Video', 'PNG Sequence', 'JPEG Sequence']}
        multiSelect={false}
        searchable={false}
      />
      <StyledLabelCell>Quality</StyledLabelCell> {/* TODO add functionality  */}
      <ItemSelector
        selectedItems={['High (720p)']}
        options={['Good (540p)', 'High (720p)', 'Highest (1080p)']}
        multiSelect={false}
        searchable={false}
      />
    </InputGrid>
    <InputGrid style={{marginTop: DEFAULT_ROW_GAP}} rows={2} rowHeight="18px">
      <StyledLabelCell>Duration</StyledLabelCell> {/* TODO add functionality  */}
      <StyledValueCell>00:00:30</StyledValueCell> 
      <StyledLabelCell>File Size</StyledLabelCell> {/* TODO add functionality  */}
      <StyledValueCell>36 MB</StyledValueCell>
    </InputGrid>
    </div>
  </PanelBodyInner>
);

const PanelFooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${DEFAULT_ROW_GAP};
  padding: ${DEFAULT_PADDING};
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const PanelFooter = () => (
  <PanelFooterInner className="render-settings-panel__footer">
    <Button
      width={DEFAULT_BUTTON_WIDTH}
      height={DEFAULT_BUTTON_HEIGHT}
      secondary
      className={'render-settings-button'}
      onClick={preview}
    >
      Preview
    </Button>
    <ButtonGroup>
      <Button
        width={DEFAULT_BUTTON_WIDTH}
        height={DEFAULT_BUTTON_HEIGHT}
        link
        className={'render-settings-button'}
        onClick={nop}
      >
        Cancel {/* TODO add functionality to close  */}
      </Button>
      <Button
        width={DEFAULT_BUTTON_WIDTH}
        height={DEFAULT_BUTTON_HEIGHT}
        className={'render-settings-button'}
        onClick={nop}
      >
        Render
      </Button>
    </ButtonGroup>
  </PanelFooterInner>
);

const Panel = styled.div`
  width: ${props => props.settingsWidth}px;
`;

class RenderSettingsPanel extends Component {
  static defaultProps = {
    settingsWidth: 980,
    buttonHeight: '16px'
  };
// TODO: Fix the layout
  render() {
    const {buttonHeight, settingsWidth, handleClose} = this.props;
    console.log("props from render setting panel", this.props.prop)
    return (
      <Panel settingsWidth={settingsWidth} className="render-settings-panel" >  
        <PanelClose buttonHeight={buttonHeight} handleClose={handleClose}/>
        <PanelBody props={this.props.prop}/>
        <PanelFooter />
      </Panel>
    );
  }
}

export default withTheme(RenderSettingsPanel);