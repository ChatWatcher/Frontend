import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from 'formik-chakra-ui';

import { Box, ButtonGroup, Heading } from '@chakra-ui/react';

function Forms() {
  return (
    <div style={{ height: '1000' }}>
      <Formik
        initialValues={{
          streamLink: '',
        }}
        onSubmit={async values => {
          const streamLink = values.streamLink;
          // set the url
          const url =
            'https://streamalyzer.herokuapp.com/stats/?VOD=' +
            streamLink +
            '&format=json';
          // fetch this url
          const response = await axios.get(url);
          const VODID = response.data[0].VOD;
          // get stream type
          const streamType = 'Reddit';

          if (streamLink.includes('twitch')) {
            streamType = 'Twitch';
          } else if (streamLink.includes('youtube')) {
            streamType = 'Youtube';
          }

          console.log(streamType);

          window.location.href = '/' + VODID + '/' + streamType;
        }}
      >
        <Form style={{ height: 1000, margin: 10 }}>
          <InputControl name="streamLink" label="Stream Link" />

          <ButtonGroup style={{ marginTop: 10 }}>
            <SubmitButton bg="gray">Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
        </Form>
      </Formik>
    </div>
  );
}

export default Forms;
