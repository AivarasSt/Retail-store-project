import React from 'react';
import {
  Box,
  Button,
  styled,
  CardContent,
  Typography,
  CardContentProps,
  CardMedia,
} from '@mui/material';
import { Link } from 'react-router-dom';

type CardContentComponentProps = CardContentProps & {
  title: string,
  to: string,
  descriptionShort?: string,
  image: string
};

const StyledCardContent = styled(CardContent)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  padding: 0,
  zIndex: 99,
  '&:hover .child': {
    display: 'flex',
  },
}));

const StyledLink = styled(Link)(() => ({
  width: '90%',
  textDecoration: 'none',
  color: 'inherit',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.primary.main,
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  color: theme.palette.secondary.main,
  borderColor: theme.palette.secondary.main,
  borderRadius: 0,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
}));

const CardContentComponent: React.FC<CardContentComponentProps> = ({
  title,
  to,
  descriptionShort,
  image,
  sx,
}) => (
  <>
    <StyledCardContent>
      <StyledLink to={to}>
        <StyledBox
          className="child"
        >
          <Typography>{title}</Typography>
          {descriptionShort && <Typography sx={{ textAlign: 'center' }}>{descriptionShort}</Typography>}
          <StyledButton variant="outlined">
            Discover
          </StyledButton>
        </StyledBox>
      </StyledLink>
    </StyledCardContent>
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{
        height: 'auto',
        width: '100%',
        position: 'absolute',
        ...sx,
      }}
    />
  </>
);

export default CardContentComponent;
