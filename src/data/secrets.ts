import { HiddenSecret } from '../types';

export const hiddenSecrets: HiddenSecret[] = [
  {
    id: 'konami',
    trigger: 'key',
    triggerValue: 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a',
    message: "You found the Konami Code! Here's a special confetti celebration just for you!",
    found: false
  },
  {
    id: 'logo-click',
    trigger: 'click',
    triggerValue: 'logo',
    message: "You found the secret logo click! I'm secretly a huge fan of retro video games.",
    found: false
  },
  {
    id: 'scroll-end',
    trigger: 'scroll',
    triggerValue: 'end',
    message: "You made it all the way to the end! Thanks for checking out my portfolio in such detail.",
    found: false
  },
  {
    id: 'hover-project',
    trigger: 'hover',
    triggerValue: 'project-secret',
    message: "You discovered my secret project notes! These are the behind-the-scenes stories.",
    found: false
  },
  {
    id: 'type-hello',
    trigger: 'key',
    triggerValue: 'h,e,l,l,o',
    message: "You typed 'hello'! Hello to you too! 👋",
    found: false
  }
];