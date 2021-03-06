import { trigger, animate, transition, style, state, group, query } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition('* <=> *', [    
      query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
      group([ 
        query(':enter', [
          style({ opacity:0 }),
          animate('500ms ease-in-out', style({ opacity:1 }))
        ]),
        query(':leave', [
          style({ opacity:1 }),
          animate('500ms ease-in-out', style({ opacity:0 }))]),
      ])
    ])
  ]);

export const slideInAnimation = trigger('slideInAnimation', [
  // Transition between any two states
  transition('* <=> *', [
    // Events to apply
    // Defined style and animation function to apply
    // Config object with optional set to true to handle when element not yet added to the DOM
    query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
    // group block executes in parallel
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true })
    ])
  ])
]);