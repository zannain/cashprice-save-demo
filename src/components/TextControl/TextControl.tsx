import React, { ComponentProps } from "react";
import Form from "react-bootstrap/Form";

export type ITextControlProps = ComponentProps<Form.Control>;

export default function TextControl({ ...rest }: ITextControlProps) {
  return <Form.Control {...rest} type={rest.type || "text"} />;
}
