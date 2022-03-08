import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, styled } from '@mui/material';

type SwiperComponentProps = {
  images?: string[]
};

const StyledImgBox = styled(Box)(({ theme }) => ({
  height: '30vh',
  width: '40vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    height: '35vh',
    width: '30vw',
  },
  [theme.breakpoints.up('md')]: {
    height: '35vh',
    width: '20vw',
  },
  [theme.breakpoints.up('lg')]: {
    height: '50vh',
    width: '20vw',
  },
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  '& .swiper-button-next': {
    // right: '0px',
    color: theme.palette.secondary.main,
  },
  '& .swiper-button-prev': {
    // left: '0px',
    color: theme.palette.secondary.main,
  },
  [theme.breakpoints.up('sm')]: {
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '80%',
  },
}));

const MainSwiperComponent: React.FC<SwiperComponentProps> = ({ images }) => (
  <StyledSwiper
    modules={[Navigation]}
    navigation
    loop
    slidesPerView={1}
  >
    {images?.map((image: string) => (
      <SwiperSlide
        key={image}
      >
        <StyledImgBox className="aaaaa" sx={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.1)), url(${image})` }} />
      </SwiperSlide>
    ))}
  </StyledSwiper>
);

export default MainSwiperComponent;
