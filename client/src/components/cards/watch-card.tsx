import React from 'react';
import {
  Card,
  CardProps,
} from '@mui/material';
import CardContentComponent from './card-content';

type WatchCardProps = CardProps & {
  title: string,
  descriptionShort: string,
  images: Array<string>,
  id: string,
};

const WatchCard: React.FC<WatchCardProps> = ({
  title,
  descriptionShort,
  id,
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
        xs: '40vw',
        sm: '30vw',
        md: '20vw',
        lg: '16vw',
        xl: '13vw',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0',
      borderRadius: '0',
      position: 'relative',
    }}
  >
    <CardContentComponent
      title={title}
      descriptionShort={descriptionShort}
      to={`/shop/product/${id}`}
      image={images[0]}
      sx={{ height: '100%', width: 'auto' }}
    />
  </Card>
);

export default WatchCard;
