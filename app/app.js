import React from 'react';
import {render} from 'react-dom';

import Form from './form';

console.log("Starting App");

render(<Form name='form' />, document.querySelector("#app"));