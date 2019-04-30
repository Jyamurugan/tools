import { storiesOf } from '@storybook/angular';

import { action } from '@storybook/addon-actions';
import { FooterComponent } from '../app/footer/footer.component';


storiesOf('Footer', module)
.add('Footer With Content',
() => ({
    component: FooterComponent,
    props: {
        content: 'Footer works'
    }
}))
.add('Footer With Content & Action',
() => ({
    template: `
    <app-footer [content]="content" ></app-footer>
    `,
    props: {
        content: 'Footer works'
    },
    moduleMetadata: {
        declarations: [ FooterComponent ]
    }
}));
