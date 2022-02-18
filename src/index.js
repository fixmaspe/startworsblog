import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import './index.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import { ContextWrapper } from './store/appContext';
import Layout from './layout';

ReactDOM.render(
    <ContextWrapper>
        <Layout />
    </ContextWrapper>
    ,
    document.getElementById('root'));
