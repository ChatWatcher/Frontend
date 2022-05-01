import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from "axios";
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
} from "formik-chakra-ui";

import { Box, ButtonGroup, Heading } from "@chakra-ui/react";

function Forms() {
  return (
    <div style={{ height: "1000" }}>
      <Formik
        initialValues={{
          streamLink: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          // make post request to backend
          axios
            .post("", values)
            .then((res) => {
              alert("SENT NOTE FOR VERIFICATION");
              window.location.href = "/okay";
            });
          // console.log response

          // alert success message
          // alert('Note created successfully');
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