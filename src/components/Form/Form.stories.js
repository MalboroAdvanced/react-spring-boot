import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";
import "../../App.css";

const defaultProps = {
  inputValue: "",
  setInputValue: () => {},
  handleSubmit: () => {},
};

const populatedProps = {
  inputValue: "Whattup Doe!",
  setInputValue: () => {},
  handleSubmit: () => {},
};

storiesOf("Form", module)
  .add("default", () => <Form {...defaultProps} />)
  .add("populated", () => <Form {...populatedProps} />);
