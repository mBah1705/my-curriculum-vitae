import {group, query, style, animate, trigger, transition } from '@angular/animations';

// Routable animations
export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: '0 6rem',
          opacity: 1,
        })
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('900ms ease-out', style({ opacity: 0, width: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('1800ms ease-out', style({ opacity: 1}))
        ], { optional: true })
      ]),
    ])
  ]);


