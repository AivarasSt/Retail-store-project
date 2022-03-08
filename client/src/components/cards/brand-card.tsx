import {
  Card,
  CardProps,
} from '@mui/material';
import React from 'react';
import CardContentComponent from './card-content';

type BrandCardProps = CardProps & {
  title: string,
  images: string[]
};

const BrandCard: React.FC<BrandCardProps> = ({
  title,
  images,
}) => (
  <Card
    sx={{
      width: {
        xs: '40vw',
        sm: '30vw',
        md: '20vw',
        lg: '16vw',
        xl: '13vw',
      },
      height: {
        xs: '25vw',
        sm: '20vw',
        md: '15vw',
        lg: '13vw',
        xl: '10vw',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0',
      borderRadius: '0',
      position: 'relative',
      marginX: '5vw',
    }}
  >
    <CardContentComponent
      title={title}
      to="/coming-soon"
      image={images[0]}
    />

  </Card>
);

export default BrandCard;
