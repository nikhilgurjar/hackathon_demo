import { FormControlLabel, Switch } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Upload, UploadBox, UploadAvatar } from "src/components/upload";

const FileInput = ({ handleNext, handleBack, handleReset }) => {
  const [files, setFiles] = useState([]);

  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
    },
    [files]
  );

  const handleRemoveFile = (inputFile) => {
    const filesFiltered = files.filter(
      (fileFiltered) => fileFiltered !== inputFile
    );
    setFiles(filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const handleUpload = () => {
    // Send uploaded files to server or process them
    handleNext();
  };

  return (
    <>
      <Upload
        multiple
        thumbnail={true}
        value={files}
        onDrop={handleDropMultiFile}
        onRemove={handleRemoveFile}
        onRemoveAll={handleRemoveAllFiles}
        onUpload={handleUpload}
      />
    </>
  );
};

export default FileInput;
