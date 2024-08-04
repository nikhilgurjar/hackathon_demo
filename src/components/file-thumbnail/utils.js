import PDFImage from "src/assets/ic-pdf.svg";
// ----------------------------------------------------------------------

// Define more types here
const FORMAT_PDF = ["pdf"];

const iconUrl = (icon) => PDFImage;

// ----------------------------------------------------------------------

export function fileFormat(fileUrl) {
  let format;

  const fileByUrl = fileTypeByUrl(fileUrl);

  switch (fileUrl.includes(fileByUrl)) {
    case FORMAT_PDF.includes(fileByUrl):
      format = "pdf";
      break;
    default:
      format = fileTypeByUrl(fileUrl);
  }

  return format;
}

// ----------------------------------------------------------------------

export function fileThumb(fileUrl) {
  let thumb;

  switch (fileFormat(fileUrl)) {
    case "pdf":
      thumb = iconUrl("ic-pdf");
      break;
    default:
      thumb = iconUrl("ic-file");
  }
  return thumb;
}

// ----------------------------------------------------------------------

export function fileTypeByUrl(fileUrl) {
  return (fileUrl && fileUrl.split(".").pop()) || "";
}

// ----------------------------------------------------------------------

export function fileNameByUrl(fileUrl) {
  return fileUrl.split("/").pop();
}

// ----------------------------------------------------------------------

export function fileData(file) {
  // From url
  if (typeof file === "string") {
    return {
      preview: file,
      name: fileNameByUrl(file),
      type: fileTypeByUrl(file),
      size: undefined,
      path: file,
      lastModified: undefined,
      lastModifiedDate: undefined,
    };
  }

  // From file
  return {
    name: file.name,
    size: file.size,
    path: file.path,
    type: file.type,
    preview: file.preview,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
  };
}
