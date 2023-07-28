import * as React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export interface ISuccessToastProps {
  show: boolean;
  onClose: any;
  message: string;
  toastBg: string;
}

export default function SuccessToast(props: ISuccessToastProps) {
  return (
    <ToastContainer position="top-end">
      <Toast
        show={props.show}
        onClose={props.onClose}
        delay={2000}
        autohide
        bg={props.toastBg}
      >
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
