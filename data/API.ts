import Toyota from '@/public/assets/to.png' 
import Tata from '@/public/assets/6578158.webp' 
import Renault from '@/public/assets/renaultone.png' 
import Kia from '@/public/assets/OIP (1).jpeg' 
import Hyundia from '@/public/assets/hyundai-logo-15.gif' 
import Honda from '@/public/assets/honda.png' 
import Maruti from '@/public/assets/marutiSuzukii.png' 
import Mahindra from '@/public/assets/Mahindra-Symbol-1.png' 
import { StaticImageData } from 'next/image'

export type Cars = {
  id: number;
  brandName: string;
  model: string;
  year: number;
  price: string;
  image: string;
  features: {
    seats: string;
    fuel: string;
    mileage: string;
    gear?: string;
  };
};



export const cars = [
  {
    id: 1,
    brandName: 'Toyota',
    model: 'Fortuner',
    year: 2022,
    price: '₹ 2000',
    image: '/assets/Cars/asset 1.webp',
    features: {
      seats: '4 Seats',
      fuel: 'Petrol',
      mileage: '12.5 kmpl',
      gear: 'Automatic',
    },
  },
  {
    id: 2,
    brandName: 'Maruti',
    model: 'Swift',
    year: 2023,
    price: '₹ 1200',
    image: '/assets/Cars/asset 2.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '22.38 kmpl',
      gear: 'Manual/Automatic',
    },
  },
  {
    id: 3,
    brandName: 'Hyundai',
    model: 'Verna',
    year: 2023,
    price: '₹ 1200',
    image: '/assets/Cars/asset 3.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '18.6 kmpl',
      gear: 'Automatic',
    },
  },
  {
    id: 4,
    brandName: 'Maruti Suzuki',
    model: 'Ciaz',
    year: 2023,
    price: '₹ 1500',
    image: '/assets/Cars/asset 4.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '14.6 kmpl',
      gear: 'Automatic',
    },
  },
  {
    id: 5,
    brandName: 'Hyundai',
    model: 'Creta',
    year: 2023,
    price: '₹ 1200',
    image: '/assets/Cars/asset 5.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '15.0 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 6,
    brandName: 'Maruti Suzuki',
    model: 'Ertiga',
    year: 2023,
    price: '₹ 1500',
    image: '/assets/Cars/asset 6.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '15.0 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 7,
    brandName: 'Kia',
    model: 'Sonet',
    year: 2023,
    price: '₹ 2000',
    image: '/assets/Cars/asset 7.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '15.0 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 8,
    brandName: 'Honda',
    model: 'City',
    year: 2023,
    price: '₹ 1200',
    image: '/assets/Cars/asset 8.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '15.0 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 9,
    brandName: 'Hyundai',
    model: 'i10 Grand',
    year: 2023,
    price: '₹ 1200',
    image: '/assets/Cars/asset 9.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '15.0 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 10,
    brandName: 'Maruti Suzuki',
    model: 'Celerio',
    year: 2023,
    price: '₹ 1200',
    image: '/assets/Cars/asset 10.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '35.6 kmpl',
      gear: 'Manual/Automatic',
    },
  },
  {
    id: 11,
    brandName: 'Maruti Suzuki',
    model: 'Wagon R',
    year: 2023,
    price: '₹ 1000',
    image: '/assets/Cars/asset 11.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '26.2 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 12,
    brandName: 'Honda',
    model: 'Amaze',
    year: 2023,
    price: '₹ 1500',
    image: '/assets/Cars/asset 12.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '25.4 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 13,
    brandName: 'Renault',
    model: 'Duster',
    year: 2023,
    price: '₹ 2000',
    image: '/assets/Cars/asset 13.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '18.3 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 14,
    brandName: 'Toyota',
    model: 'Innova Crysta',
    year: 2023,
    price: '₹ 2000',
    image: '/assets/Cars/asset 14.webp',
    features: {
      seats: '7 Seats',
      fuel: 'Petrol',
      mileage: '18.3 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 15,
    brandName: 'Maruti Suzuki',
    model: 'Baleno',
    year: 2023,
    price: '₹ 1500',
    image: '/assets/Cars/asset 15.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '27.4 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 16,
    brandName: 'Mahindra',
    model: 'Thar Suv',
    year: 2023,
    price: '₹ 3500',
    image: '/assets/Cars/asset 16.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Diesel',
      mileage: '15.2 kmpl',
      gear: 'Manual/Automatic',
    },
  },
  {
    id: 17,
    brandName: 'Mahindra',
    model: 'Scorpio',
    year: 2023,
    price: '₹ 3500',
    image: '/assets/Cars/asset 17.webp',
    features: {
      seats: '8 Seats',
      fuel: 'Diesel',
      mileage: '17.5 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 18,
    brandName: 'Maruti Suzuki',
    model: 'Alto 800',
    year: 2023,
    price: '₹ 1000',
    image: '/assets/Cars/asset 18.webp',
    features: {
      seats: '4 Seats',
      fuel: 'Petrol',
      mileage: '22.05 kmpl',
      gear: 'Manual',
    },
  },
  {
    id: 19,
    brandName: 'Maruti',
    model: 'Brezza',
    year: 2023,
    price: '₹ 2000',
    image: '/assets/Cars/asset 19.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Petrol',
      mileage: '19.8 kmpl',
      gear: 'Automatic',
    },
  },
  {
    id: 20,
    brandName: 'Tata',
    model: 'Nexon',
    year: 2023,
    price: '₹ 3500',
    image: '/assets/Cars/asset 20.webp',
    features: {
      seats: '5 Seats',
      fuel: 'Diesel',
      mileage: '24.08 kmpl',
      gear: 'Automatic',
    },
  },
];

export type BrandName = {
 id: number;
 img: StaticImageData
}

export const brandName : BrandName[] = [
  {id: 1, img:Toyota },
  {id: 2, img:Tata },
  {id: 3, img:Kia },
  {id: 4, img: Honda },
  {id: 5, img: Mahindra },
  {id: 6, img: Maruti },
  {id: 7, img: Hyundia},
  {id: 8, img: Renault}
]

export const bikes = [
	{
		id: 1,
		brandName: 'Royal Enfield',
		model: 'Shotgun 650',
		year: 2024,
		price: '₹ 2000',
		image: '/assets/Bikes/royalSG650.webp',
		features: {
			seats: 'Single',
			fuel: 'Petrol',
			mileage: '22 kmpl',
			gear: 'Manual',
		},
	},
	{
		id: 2,
		brandName: 'Royal Enfield',
		model: 'Meteor 350',
		year: 2023,
		price: '₹ 2000',
		image: '/assets/Bikes/royalMeteor350.png',
		features: {
			seats: 'Single',
			fuel: 'Petrol',
			mileage: '41.88 kmpl',
			gear: 'Manual',
		},
	},
	{
		id: 3,
		brandName: 'Yamaha',
		model: 'AEROX 155',
		year: 2024,
		price: '₹ 2000',
		image: '/assets/Bikes/AEROX_155.png',
		features: {
			seats: 'Single',
			fuel: 'Petrol',
			mileage: '48.63 kmpl',
			gear: 'Automatic',
		},
	},
	{
		id: 4,
		brandName: 'Aprilia',
		model: 'SR 160',
		year: 2024,
		price: '₹ 2000',
		image: '/assets/Bikes/sr-160-right-side-view-2.webp',
		features: {
			seats: 'Single',
			fuel: 'Petrol',
			mileage: '35 kmpl',
			gear: 'Automatic',
		},
	},
	{
		id: 5,
		brandName: 'Vespa',
		model: 'SXL 125',
		year: 2024,
		price: '₹ 2000',
		image: '/assets/Bikes/Vespa Vespa SXL 125.jpeg',
		features: {
			seats: 'Single',
			fuel: 'Petrol',
			mileage: '36 kmpl',
			gear: 'Automatic',
		},
	},
];