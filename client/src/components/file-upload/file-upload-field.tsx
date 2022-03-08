import React, { useRef, useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Alert,
  styled,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Img from './img';

export type ImgData = {
  src: string,
  file?: File,
};

export type FileUploadFieldProps = {
  imgDataArr: ImgData[]
  onChange: (imgDataArr: ImgData[]) => void
};

const StyledBox = styled(Box)(({ theme }) => ({
  width: '80%',
  margin: '10px 0',
  border: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: 3,

}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: 2,
  padding: 10,
  borderRadius: 3,
  boxShadow: 'none',
  ':hover': {
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'none',
  },
}));

const convertFileToUrl = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  imgDataArr,
  onChange,
}) => {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImagesChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    const input = e.target as HTMLInputElement;
    const { files } = input;
    const existingNames = imgDataArr
      .filter((x) => x.file)
      .map((imgData) => (imgData.file ? imgData.file.name : 'unnamed'));
    if (files !== null) {
      const fileArr = Array.from(files);
      const existingFiles = fileArr.filter((file) => existingNames.includes(file.name));
      if (existingFiles.length > 0) {
        const existingFilesStr = existingFiles.map((x) => `'${x.name}'`).join(', ');
        setError(`Files already exists: ${existingFilesStr}`);
        return;
      }
      (async () => {
        const imgUrls = await Promise.all(fileArr.map(convertFileToUrl)) as string[];
        const newImgDataArr: ImgData[] = imgUrls.map((src, i) => ({ file: fileArr[i], src }));
        onChange([...imgDataArr, ...newImgDataArr]);
      })();
    }
  };

  const deleteImage = (imgData: ImgData) => {
    onChange(imgDataArr.filter((x) => x.src !== imgData.src));
  };

  return (
    <StyledBox>
      <Box>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={() => fileUploadRef.current?.click()}
        >
          Choose pictures
        </StyledButton>
        <TextField
          type="file"
          fullWidth
          sx={{ display: 'none' }}
          inputProps={{
            multiple: true,
            onChange: handleImagesChange,
            ref: fileUploadRef,
          }}
        />
      </Box>
      {error && (
        <Alert color="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <Box sx={{
        display: 'flex', flexWrap: 'wrap', gap: 2, m: 2,
      }}
      >
        {imgDataArr.map((imgData, i) => (
          <Box
            key={imgData.src}
            sx={{
              position: 'relative', width: 100, height: 100, mb: 4,
            }}
          >
            <IconButton
              sx={{
                position: 'absolute', top: 0, right: 0, zIndex: 2,
              }}
              color="error"
              onClick={() => deleteImage(imgData)}
            >
              <DeleteIcon sx={{ fontSize: 15 }} />
            </IconButton>
            <Img
              src={imgData.src}
              alt={String(i)}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
              }}
            />
            <Typography
              sx={{
                position: 'absolute',
                bottom: -20,
                fontSize: {
                  xs: '2vw',
                  sm: '1.5vw',
                  md: '1vw',
                  lg: '0.7vw',
                },
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {imgData.file && imgData.file.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </StyledBox>
  );
};

export default FileUploadField;
