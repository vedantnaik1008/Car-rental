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
    gear: string;
  };
};



export const cars = [
  {
    id: 1,
    brandName: 'Toyota',
    model: 'Fortuner',
    year: 2022,
    price: '₹ 2000',
    image: '/assets/Cars/asset 1.png',
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
    image: '/assets/Cars/asset 2.png',
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
    image: '/assets/Cars/asset 3.png',
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
    image: '/assets/Cars/asset 4.png',
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
    image: '/assets/Cars/asset 5.png',
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
    image: '/assets/Cars/asset 6.png',
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
    image: '/assets/Cars/asset 7.png',
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
    image: '/assets/Cars/asset 8.png',
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
    image: '/assets/Cars/asset 9.png',
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
    image: '/assets/Cars/asset 10.png',
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
    image: '/assets/Cars/asset 11.png',
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
    image: '/assets/Cars/asset 12.png',
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
    image: '/assets/Cars/asset 13.png',
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
    image: '/assets/Cars/asset 14.png',
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
    image: '/assets/Cars/asset 15.png',
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
    image: '/assets/Cars/asset 16.png',
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
    image: '/assets/Cars/asset 17.png',
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
    image: '/assets/Cars/asset 18.png',
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
    image: '/assets/Cars/asset 19.png',
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
    image: '/assets/Cars/asset 20.png',
    features: {
      seats: '5 Seats',
      fuel: 'Diesel',
      mileage: '24.08 kmpl',
      gear: 'Automatic',
    },
  },
];
