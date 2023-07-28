import React, { ComponentProps } from "react";

export type ITextControlProps = ComponentProps<"input"> & {};

export default function TextControl({ ...rest }: ITextControlProps) {
  return <input className="form-control" {...rest} type="text" />;
}
