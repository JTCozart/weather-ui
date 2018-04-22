import React from 'react';
import { storiesOf } from '@storybook/react';

import Weather from '../src/Weather';

storiesOf('Weather', module)
    .add('storybook', () => <Weather/>);
