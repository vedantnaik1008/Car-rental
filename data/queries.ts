type Queries = {
  id: number;
  question: string;
  answer: string;
};

export const queries: Queries[] = [
  {
    id: 1,
    question: 'What types of cars do you offer for rent?',
    answer:
      'We offer a wide range of cars from compact to luxury. You can choose the one that best suits your needs and preferences.',
  },
  {
    id: 2,
    question: 'How can I book a car?',
    answer:
      'You can book a car through our website or by contacting us directly via phone or WhatsApp.',
  },
  {
    id: 3,
    question: 'What are your rental rates?',
    answer:
      'Our rental rates vary depending on the type of car and the duration of the rental. Please visit our website or contact us for specific rates.',
  },
  {
    id: 4,
    question: 'What is your cancellation policy?',
    answer:
      'You can cancel your booking up to 24 hours before the scheduled pick-up time for a full refund. Please contact us for more details.',
  },
  {
    id: 5,
    question: 'Do you offer pick-up and drop-off services?',
    answer:
      'Yes, we offer pick-up and drop-off services for your convenience. Please contact us to arrange this service.',
  },
  {
    id: 6,
    question: 'What do I need to rent a car?',
    answer:
      'You will need a valid driving license and a credit card for the security deposit. Please contact us for more details.',
  },
];
