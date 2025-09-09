import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Powered Chatbot',
    description: 'A comprehensive design system with AI-generated components that adapt to brand guidelines automatically.',
    tags: ['React', 'AI', 'Design System', 'TypeScript'],
    image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://github.com/Kartik78990/Chatbot',
    secretNote: 'The first prototype failed spectacularly - it turned out I forgot to create  backend! 🤫'
  },
  {
    id: 2,
    title: 'Marauders Booking',
    description: 'An event Booking system for Harry Potter world.',
    tags: ['Node.js', 'MySQL', 'React', 'Express'],
    image: 'https://images.pexels.com/photos/7978207/pexels-photo-7978207.jpeg?_gl=1*z2hvp3*_ga*MTI4MjE4Mzc2Ni4xNzU2MTIxODk2*_ga_8JE65Q40S6*czE3NTYxMjE4OTUkbzEkZzEkdDE3NTYxMjE5MjEkajM0JGwwJGgw',
    link: 'https://github.com/Kartik78990/Marauder-s-Booking',
    secretNote: 'I wrote the core smart contract during a 36-hour coding marathon! Never again... 😅'
  },
];
