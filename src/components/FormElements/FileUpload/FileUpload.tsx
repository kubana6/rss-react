import React from "react";
import { FileUploadProps } from "./type";
import "./FileUpload.scss";

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    { accept, multiple, className, error, id, labelName, classNameWrapper, onChange, onBlur, name },
    ref
  ) => {
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
          onChange={onChange}
          ref={ref}
          className={className}
          onBlur={onBlur}
          name={name}
        />

        {error && <span className="input-error">{error}</span>}
      </fieldset>
    );
  }
);
