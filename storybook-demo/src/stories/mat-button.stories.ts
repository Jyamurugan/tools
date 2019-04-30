import { storiesOf } from '@storybook/angular';

import { MatButtonModule } from '@angular/material';
import { action } from '@storybook/addon-actions';


storiesOf('MatButton', module)
  .add('basic button',
  () => ({
    template: `
    <button mat-button>Basic Button</button>
    `,
    moduleMetadata: {
        imports: [MatButtonModule]
    },
  }),
  {
      notes: 'Basic Button With Text'
  }
  )
  .add('raised button', () => ({
    template: `
    <button mat-raised-button>Raised Button</button>
    `,
    moduleMetadata: {
        imports: [MatButtonModule]
    }
  }),
  {
      notes: 'Raised Button With Text'
  });
