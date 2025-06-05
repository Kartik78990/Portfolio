import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Powered Chatbot',
    description: 'A comprehensive design system with AI-generated components that adapt to brand guidelines automatically.',
    tags: ['React', 'AI', 'Design System', 'TypeScript'],
    image: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://github.com',
    secretNote: 'The first prototype failed spectacularly - it turned out I forgot to create  backend! 🤫'
  },
  {
    id: 2,
    title: 'Blockchain Marketplace',
    description: 'A decentralized marketplace for digital assets with secure blockchain verification and smart contracts.',
    tags: ['Blockchain', 'Solidity', 'Next.js', 'Web3'],
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://github.com',
    secretNote: 'I wrote the core smart contract during a 36-hour coding marathon! Never again... 😅'
  },
];