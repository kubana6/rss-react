import React, { Component, ChangeEvent } from "react";
import { FileUploadProps } from "./type";
import "./FileUpload.scss";

export class FileUpload extends Component<FileUploadProps> {
  handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    if (onChange) {
      const { files } = event.target;
      if (files && files.length > 0) {
        const filesArray: File[] = Array.from(files);
        onChange(filesArray);
      }
    }
  };

  render() {
    const { accept, multiple, className, errors, refObject, id, labelName, classNameWrapper } =
      this.props;

    return (
      <fieldset className={classNameWrapper}>
        {labelName && (
          <label className="label" htmlFor={id}>
            {labelName}
          </label>
        )}
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={this.handleFileChange}
          ref={refObject}
          className={className}
        />
        {errors &&
          errors.map((error) => (
            <span key={error} className="input-error">
              {error}
            </span>
          ))}
      </fieldset>
    );
  }
}
