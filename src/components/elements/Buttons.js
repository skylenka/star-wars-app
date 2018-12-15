import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Buttons = props => {
  return (
    <>
      <Button
        content="Prev"
        icon="left arrow"
        labelPosition="left"
        size="mini"
        onClick={() => props.fnprev()}
        disabled={props.prev !== null ? false : true}
      />
      <Button
        content="Next"
        icon="right arrow"
        labelPosition="right"
        size="mini"
        onClick={() => props.fnnext()}
        disabled={props.next !== null ? false : true}
      />
    </>
  );
};

export default Buttons;
