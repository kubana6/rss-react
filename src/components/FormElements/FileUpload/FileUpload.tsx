import React, { ChangeEvent, useCallback } from "react";
import { FileUploadProps } from "./type";
import "./FileUpload.scss";

export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  multiple,
  className,
  errors,
  refObject,
  id,
  labelName,
  classNameWrapper,
  onChange,
}) => {
  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const { files } = event.target;
        if (files && files.length > 0) {
          const filesArray: File[] = Array.from(files);
          onChange(filesArray);
        }
      }
    },
    [onChange]
  );

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
        onChange={handleFileChange}
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
};
