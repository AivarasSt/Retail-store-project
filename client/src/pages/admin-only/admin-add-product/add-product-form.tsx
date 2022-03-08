import React, { useEffect, useState } from 'react';
import {
  Box,
  MenuItem,
  styled,
  Theme,
  Grid,
} from '@mui/material';
import * as yup from 'yup';
import type Brand from 'types/brand';
import type Collection from 'types/collection';
import BrandService from 'services/brand-service';
import Watch from 'types/watch';
import type WatchData from 'types/watch-data';
import BrandModal from 'components/form-modal/brand-modal';
import CollectionService from 'services/collection-service';
import FileUploadField, { FileUploadFieldProps } from 'components/file-upload/file-upload-field';
import { FormikHelpers, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import CollectionModal from 'components/form-modal/collection-modal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProductService from 'services/product-service';
import StyledTextField from '../../../components/form-text-fields/index';
import { StyledButton } from '../admin-products';

type InitialValues = {
  title: string,
  brand: string,
  collectionName: string,
  descriptionShort: string,
  description: string,
  movement: string,
  sex: string,
  price: number,
  specification: string,
  images: FileUploadFieldProps['imgDataArr'],
};

type FormikSubmit = (
  values: InitialValues,
  formikHelpers: FormikHelpers<InitialValues>
) => void | Promise<void>;

const validationSchema = yup.object({
  title: yup.string()
    .required('Is required'),
  brand: yup.string()
    .required('Is required'),
  collectionName: yup.string()
    .required('Is required'),
  descriptionShort: yup.string()
    .required('Is required'),
  description: yup.string()
    .required('Is required'),
  movement: yup.string()
    .required('Is required'),
  sex: yup.string()
    .required('Is required'),
  price: yup.number()
    .required('Is required'),
  specification: yup.string()
    .required('Is required'),
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: '0.8vw 1.5vw',
  backgroundColor: theme.palette.primary.main,
  ':hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
  },
}));

const selectProps = {
  MenuProps: {
    sx: (theme: Theme) => ({
      '& .MuiList-root': {
        backgroundColor: theme.palette.primary.main,
      },
    }),
  },
};

const sexOptions = ['Male', 'Female', 'Unisex'];

const AddProductForm: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState('');
  const [fetchAgain, setFetchAgain] = useState(false);
  const [fetchedBrands, setFetchedBrands] = useState<Brand[]>([]);
  const [fetchedCollections, setFetchedCollections] = useState<Collection[]>([]);
  const [fetchedProduct, setFetchedProduct] = useState<Watch>();
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const initialValues: InitialValues = {
    title: fetchedProduct?.title ?? '',
    brand: fetchedProduct?.brand.id ?? '',
    collectionName: fetchedProduct?.collectionName.id ?? '',
    descriptionShort: fetchedProduct?.descriptionShort ?? '',
    description: fetchedProduct?.description ?? '',
    movement: fetchedProduct?.movement ?? '',
    sex: fetchedProduct?.sex ?? '',
    price: fetchedProduct?.price ?? 0,
    specification: fetchedProduct?.specification ?? '',
    images: [],
  };

  const handleCreateProduct = (formData: WatchData) => {
    navigate('/admin/products', { state: { reload: true } });
    dispatch(ProductService.createProduct(formData));
  };

  const handleModalClick = () => {
    setFetchAgain(true);
  };

  const handleUpdateProduct = (formData: Omit<WatchData, 'images'>) => {
    navigate('/admin/products');
    dispatch(ProductService.updateProduct(formData));
  };

  const onSubmit: FormikSubmit = ({
    images, ...values
  }) => {
    if (action === 'Edit') {
      const formattedData: Omit<WatchData, 'images'> = {
        ...values,
        id,
      };
      handleUpdateProduct(formattedData);
    } else {
      const formattedData: WatchData = {
        ...values,
        images: images
          .map((x) => (x.file ? x.file : undefined))
          .filter((x) => x) as File[],
      };
      handleCreateProduct(formattedData);
    }
  };

  const {
    values,
    handleChange,
    setFieldValue,
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

  const handleImagesChange = (images: FileUploadFieldProps['imgDataArr']) => {
    setFieldValue('images', images, true);
  };

  const fetchOptions = async () => {
    const [fetchedBrandOptions, fetchedCollectionOptions] = await Promise.all([
      BrandService.getBrands(),
      CollectionService.getCollections(),
    ]);
    setFetchedBrands(fetchedBrandOptions);
    setFetchedCollections(fetchedCollectionOptions);
  };

  useEffect(() => {
    setLoading(true);
    fetchOptions();
    if (location.pathname.includes('/editproduct')) {
      setAction('Edit');
      (async () => {
        const product = await ProductService.getProduct(id);
        if (product) {
          setFetchedProduct(product);
        }
      })();
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!fetchAgain) return;
    setTimeout(() => {
      fetchOptions();
      setFetchAgain(false);
    }, 200);
  }, [fetchAgain]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        height: { xs: 'auto', md: '80vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: '5vw',
      }}
    >
      {loading ? null
        : (
          <>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <StyledTextField
                  name="title"
                  variant="outlined"
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Title"
                  fullWidth
                />
                <StyledTextField
                  name="brand"
                  select
                  variant="outlined"
                  error={touched.brand && Boolean(errors.brand)}
                  helperText={touched.brand && errors.brand}
                  value={values.brand}
                  onBlur={handleBlur}
                  label="Brand"
                  onChange={handleChange}
                  SelectProps={selectProps}
                  fullWidth
                >
                  {fetchedBrands?.map((option) => (
                    <StyledMenuItem key={option.id} value={option.id}>
                      {option.title}
                    </StyledMenuItem>
                  ))}
                  <BrandModal handleModalClick={handleModalClick} />
                </StyledTextField>
                <StyledTextField
                  name="collectionName"
                  select
                  variant="outlined"
                  value={values.collectionName}
                  onChange={handleChange}
                  error={touched.collectionName && Boolean(errors.collectionName)}
                  helperText={touched.collectionName && errors.collectionName}
                  onBlur={handleBlur}
                  label="Collection"
                  SelectProps={selectProps}
                  fullWidth
                >
                  {fetchedCollections?.map((option) => (
                    <StyledMenuItem key={option.id} value={option.id}>
                      {option.title}
                    </StyledMenuItem>
                  ))}
                  <CollectionModal handleModalClick={handleModalClick} />
                </StyledTextField>
                <StyledTextField
                  name="descriptionShort"
                  variant="outlined"
                  error={touched.descriptionShort && Boolean(errors.descriptionShort)}
                  helperText={touched.descriptionShort && errors.descriptionShort}
                  value={values.descriptionShort}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  label="Short description"
                  fullWidth
                />
                <StyledTextField
                  name="description"
                  variant="outlined"
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  value={values.description}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  label="Full Description"
                  fullWidth
                />
                <StyledTextField
                  name="movement"
                  variant="outlined"
                  error={touched.movement && Boolean(errors.movement)}
                  helperText={touched.movement && errors.movement}
                  value={values.movement}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  label="Movement"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <StyledTextField
                  name="sex"
                  variant="outlined"
                  select
                  error={touched.sex && Boolean(errors.sex)}
                  helperText={touched.sex && errors.sex}
                  value={values.sex}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  SelectProps={selectProps}
                  label="Sex"
                  fullWidth
                >
                  {sexOptions.map((option) => (
                    <StyledMenuItem key={option} value={option}>
                      {option}
                    </StyledMenuItem>
                  ))}
                </StyledTextField>
                <StyledTextField
                  name="price"
                  variant="outlined"
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                  value={values.price}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Price"
                  fullWidth
                />
                <StyledTextField
                  name="specification"
                  error={touched.specification && Boolean(errors.specification)}
                  helperText={touched.specification && errors.specification}
                  value={values.specification}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  variant="outlined"
                  placeholder="Example: 'TITLE: Specification, TITLE#2: Specification'"
                  label="Specification"
                  fullWidth
                />
                {action === 'Edit' ? null
                  : (
                    <FileUploadField
                      imgDataArr={values.images}
                      onChange={handleImagesChange}
                    />
                  )}
              </Grid>
            </Grid>
            <StyledButton sx={{ m: '3vw', width: { sm: '40vw', md: '20vw' }, borderRadius: 0.95 }} type="submit">
              {action === 'Edit' ? 'Update Product' : 'Create Product'}
            </StyledButton>
          </>
        )}
    </Box>
  );
};
export default AddProductForm;
