import React from 'react';
// import { makeStyles } from '@mui/styles';
// import {
//   alpha,
//   Box,
//   Button,
//   Card,
//   CardMedia,
//   CardProps,
//   MenuItem,
//   styled,
//   TextField,
//   Typography,
// } from '@mui/material';
// import Watch from 'types/watch';

// type CartCardProps = CardProps & {
//   item?: Watch
// }

// const StyledCard = styled(Card)(({theme}) => ({
//   display: 'flex',
//   borderTop: `1px solid ${alpha(theme.palette.secondary.main, 0.05)}`,
//   borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.05)}`,
//   boxShadow: 'none',
//  }));

// const StyledButton = styled(Button)(({theme}) => ({
//  color: theme.palette.secondary.main,
//  textDecoration: 'underline',
// }));

// const StyledTypography= styled(Typography)(({ theme }) => ({
//   fontSize: '4vw',
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '3vw'
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '1.8vw'
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '1.3vw'
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '1vw'
//   },
// }));

// const CartCard: React.FC<CartCardProps> = ({item}) => {
//   const [quantity, setQuantity] = React.useState('1');

//   return (
//     <StyledCard className="AAAAAAAAA">
//       <CardMedia
//         component="img"
//         image={item.images[0]}
//         alt="watch"
//         sx={{ height: { xs: '30vw', md: '15vw' }, width: 'auto', padding: 3 }}
//       />
//       <Box sx={{
//         m: '3vw',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         width: '100%',
//       }}
//       >
//         <Box sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           width: '100%',
//         }}
//         >
//           <StyledTypography>
//             {item.title}
//           </StyledTypography>
//           <StyledTypography>
//             {`${item.price.toLocaleString()} €`}
//           </StyledTypography>
//         </Box>
//         <Box sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           width: '100%',
//         }}
//         >
//         <TextField
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           variant="outlined"
//           select
//         >
//           <MenuItem value={1}>1</MenuItem>
//           <MenuItem value={2}>2</MenuItem>
//           <MenuItem value={3}>3</MenuItem>
//           <MenuItem value={4}>4</MenuItem>
//           <MenuItem value={5}>5</MenuItem>
//           <MenuItem value={6}>6</MenuItem>
//           <MenuItem value={7}>7</MenuItem>
//           <MenuItem value={8}>8</MenuItem>
//           <MenuItem value={9}>9</MenuItem>
//           <MenuItem value={10}>10</MenuItem>
//         </TextField>
//         <StyledButton variant="text">Remove Item</StyledButton>
//         </Box>
//       </Box>
//     </StyledCard>
//   );
// };

// export default CartCard;
