import * as React from 'react';
import * as yup from 'yup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {
  Box, styled, Button, BoxProps,
} from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import OrderData from 'types/order-data';
import { useDispatch } from 'react-redux';
import OrderService from 'services/order-service';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.secondary.main,
  },
  '& .MuiInput-root.Mui-focused': {
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  '& label': {
    color: theme.palette.secondary.main,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ':hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

type InitialValues = {
  name: string,
  surname: string,
  phoneNumber: string,
  city: string,
  country: string,
};

type ClientFormProps = BoxProps & {
  handleNext: () => void
};

type FormikSubmit = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<void>;

const initialValues: InitialValues = {
  name: '',
  surname: '',
  phoneNumber: '',
  city: '',
  country: '',
};

const phoneRegExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

const validationSchema = yup.object({
  name: yup.string()
    .required('Is required'),
  surname: yup.string()
    .required('Is required'),
  phoneNumber: yup.string()
    .required('Is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  city: yup.string()
    .required('Is required'),
  country: yup.string()
    .required('Is required'),

});

const ClientForm: React.FC<ClientFormProps> = ({ handleNext }) => {
  const dispatch = useDispatch();

  const handleCreateOrder = (formData: OrderData) => {
    dispatch(OrderService.createOrder(formData));
  };

  const onSubmit: FormikSubmit = (formData: OrderData) => {
    handleNext();
    console.log('aaaa', handleNext);
    handleCreateOrder(formData);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik<InitialValues>({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" gutterBottom>
        Client information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="name"
            name="name"
            label="First name"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="surname"
            name="surname"
            label="Last name"
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
            value={values.surname}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            value={values.phoneNumber}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="phone-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="city"
            name="city"
            label="City"
            error={touched.city && Boolean(errors.city)}
            helperText={touched.city && errors.city}
            value={values.city}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="country"
            name="country"
            label="Country"
            error={touched.country && Boolean(errors.country)}
            helperText={touched.country && errors.country}
            value={values.country}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="country"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <StyledButton
          variant="contained"
          type="submit"
          sx={{ mt: 3, ml: 1 }}
        >
          Next
        </StyledButton>
      </Box>
    </Box>
  );
};

export default ClientForm;
