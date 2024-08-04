import { useDropzone } from "react-dropzone";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";

import { varAlpha } from "src/theme/styles";

import { Iconify } from "../iconify";
import { UploadPlaceholder } from "./components/placeholder";
import { MultiFilePreview } from "./components/preview-multi-file";

// ----------------------------------------------------------------------

export function Upload({
  sx,
  value,
  error,
  disabled,
  onDelete,
  onUpload,
  onRemove,
  thumbnail,
  helperText,
  onRemoveAll,
  multiple = false,
  ...other
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple,
    disabled,
    ...other,
  });

  const isArray = Array.isArray(value) && multiple;

  const hasFiles = isArray && !!value.length;

  const hasError = isDragReject || !!error;

  const renderMultiPreview = hasFiles && (
    <>
      <MultiFilePreview
        files={value}
        thumbnail={thumbnail}
        onRemove={onRemove}
        sx={{ my: 3 }}
      />

      {(onRemoveAll || onUpload) && (
        <Stack direction="row" justifyContent="flex-start" spacing={6}>
          {onRemoveAll && (
            <Button
              color="inherit"
              variant="outlined"
              size="large"
              sx={{
                minWidth: "244px",
              }}
              onClick={onRemoveAll}
            >
              Remove all
            </Button>
          )}

          {onUpload && (
            <Button
              size="large"
              variant="contained"
              onClick={onUpload}
              startIcon={<Iconify icon="eva:cloud-upload-fill" />}
              sx={{
                minWidth: "244px",
                backgroundColor: "primary.dark",
              }}
            >
              Upload
            </Button>
          )}
        </Stack>
      )}
    </>
  );

  return (
    <Box sx={{ width: 1, position: "relative", ...sx }}>
      <Box
        {...getRootProps()}
        sx={{
          p: 5,
          outline: "none",
          borderRadius: 1,
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          bgcolor: (theme) =>
            varAlpha(theme.vars.palette.grey["500Channel"], 0.08),
          border: (theme) =>
            `1px dashed ${varAlpha(
              theme.vars.palette.grey["500Channel"],
              0.2
            )}`,
          transition: (theme) =>
            theme.transitions.create(["opacity", "padding"]),
          "&:hover": { opacity: 0.72 },
          ...(isDragActive && { opacity: 0.72 }),
          ...(disabled && { opacity: 0.48, pointerEvents: "none" }),
          ...(hasError && {
            color: "error.main",
            borderColor: "error.main",
            bgcolor: (theme) =>
              varAlpha(theme.vars.palette.error.mainChannel, 0.08),
          }),
        }}
      >
        <input {...getInputProps()} />

        <UploadPlaceholder />
      </Box>
      {helperText && (
        <FormHelperText error={!!error} sx={{ px: 2 }}>
          {helperText}
        </FormHelperText>
      )}

      {/* Multi files */}
      {renderMultiPreview}
    </Box>
  );
}
