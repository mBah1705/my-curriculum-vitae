import {animation, group, query, style, animate} from '@angular/animations';

export const slideAnimation = animation([
  group([
    query(':enter', style({transform : 'translateX({{ enterStart }}) scale({{ hiddenScale }})'}), {optional: true}),
    query(':leave', [
      animate('{{ time }} ease-in-out', style({transform : 'translateX({{ leaveEnd }}) scale({{ hiddenScale }})'}))
    ], {optional: true}),
    query(':enter', [
      animate('{{ time }} ease-in-out', style({transform : 'translateX(0) scale(1)'}))
    ], {optional: true})
  ])
])