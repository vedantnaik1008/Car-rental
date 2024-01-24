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

export { Slider };
