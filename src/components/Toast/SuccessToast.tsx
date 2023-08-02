import * as React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export interface ISuccessToastProps {
  message: string;
  toastBg: string;
}

export default function SuccessToast(props: ISuccessToastProps) {
  return (
    <ToastContainer position="top-end">
      <Toast delay={1000} autohide bg={props.toastBg}>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
