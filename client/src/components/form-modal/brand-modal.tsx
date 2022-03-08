import React, { ReactFragment, useEffect, useState } from 'react';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';
import { DarkTextField } from 'components/form-text-fields';
import FileUploadField, { FileUploadFieldProps } from 'components/file-upload/file-upload-field';
import { FormikHelpers, useFormik } from 'formik';
import BrandData from 'types/brand-data';
import BrandService from 'services/brand-service';
import { useDispatch } from 'react-redux';
import { StyledButton as StyledSubmitButton } from '../../pages/admin-only/admin-products';

type BrandModalProps = ReactFragment & {
  handleModalClick: () => void
};

type InitialValues = {
  title: string,
  images: FileUploadFieldProps['imgDataArr'],
};

type FormikSubmit = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<void>;

const initialValues: InitialValues = {
  title: '',
  images: [],
};

const validationSchema = yup.object({
  title: yup.string()
    .required('Is required'),
  images: yup.array()
    .min(1)
    .required('Is required'),
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '0.8vw 1.5vw',
  justifyContent: 'start',
  color: theme.palette.secondary.main,
  ':hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BrandModal: React.FC<BrandModalProps> = ({ handleModalClick }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleCreateBrand = (formData: BrandData) => {
    handleClose();
    handleModalClick();
    dispatch(BrandService.createBrand(formData));
  };

  const onSubmit: FormikSubmit = ({
    images, ...values
  }) => {
    const formattedData: BrandData = {
      ...values,
      images: images
        .map((x) => (x.file ? x.file : undefined))
        .filter((x) => x) as File[],
    };
    handleCreateBrand(formattedData);
  };

  const {
    values,
    handleChange,
    setFieldValue,
    resetForm,
    isSubmitting,
    handleSubmit,
  } = useFormik<InitialValues>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isSubmitting) return;
    resetForm();
  }, [isSubmitting]);

  const handleImagesChange = (images: FileUploadFieldProps['imgDataArr']) => {
    setFieldValue('images', images, true);
  };

  return (
    <>
      <StyledButton onClick={handleOpen}>+ Add new brand</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <DarkTextField
              name="title"
              variant="outlined"
              label="Title"
              value={values.title}
              onChange={handleChange}
              fullWidth
            />
            <FileUploadField
              imgDataArr={values.images}
              onChange={handleImagesChange}
            />
          </Box>
          <StyledSubmitButton sx={{ m: '3vw', width: { sm: '20vw', md: '10vw' }, borderRadius: 0.95 }} type="submit">Create Brand</StyledSubmitButton>
        </Box>
      </Modal>
    </>
  );
};

export default BrandModal;
