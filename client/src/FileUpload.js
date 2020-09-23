import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";

const FileUpload = ({
  onSubmit,
  file,
  uploadPercentage,
  message,
  uploadedFile,
  onChange,
  filename,
}) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input type="submit" value="Upload" className="custom-file-label" />
      </form>
    </Fragment>
  );
};

export default FileUpload;
