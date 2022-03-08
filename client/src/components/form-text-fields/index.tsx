import { styled, TextField } from '@mui/material';

export const DarkTextField = styled(TextField)(({ theme }) => ({
  margin: '10px 0',
  color: theme.palette.primary.main,
  '& .MuiInputLabel-root': {
    color: theme.palette.primary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& input': {
    color: theme.palette.primary.main,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.secondary.main} inset`,
    WebkitTextFillColor: theme.palette.primary.main,
  },
  '& div': {
    color: theme.palette.primary.main,
  },
  '& svg': {
    color: theme.palette.primary.main,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '80%',
  margin: '10px 0',
  '& .MuiInputLabel-root': {
    color: theme.palette.secondary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.secondary.main,
  },
  '& input': {
    color: theme.palette.secondary.main,
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.primary.main} inset`,
    WebkitTextFillColor: theme.palette.secondary.main,
  },
  '& svg': {
    color: theme.palette.secondary.main,
  },
}));

export default StyledTextField;
