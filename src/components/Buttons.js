import React from 'react';
import { Button } from 'semantic-ui-react';

const Buttons = props => (
  <>
    <Button
      primary
      content="Prev"
      icon="left arrow"
      labelPosition="left"
      size="mini"
      onClick={() => props.fnPrev()}
      disabled={props.prev !== null ? false : true}
      style={{ margin: '10px 10px 10px 0px' }}
    />
    <Button
      secondary
      content="Next"
      icon="right arrow"
      labelPosition="right"
      size="mini"
      onClick={() => props.fnNext()}
      disabled={props.next !== null ? false : true}
    />
  </>
);

export default Buttons;
