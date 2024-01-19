import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from './ReactIcons';

export const TestimonialSettings = {
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <IoIosArrowForward color='rgb(203, 213, 225)' />,
  prevArrow: <IoIosArrowBack color='rgb(203, 213, 225)' />,
};

export const FeaturedCarSettings = {
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <IoIosArrowForward color='rgb(203, 213, 225)' />,
  prevArrow: <IoIosArrowBack color='rgb(203, 213, 225)' />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

export { Slider };
