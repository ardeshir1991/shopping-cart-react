import React from "react";
import ReactDOM from "react-dom/client";
import App from './app';
import Modal from "react-modal";
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {getProducts} from './redux/features/productSlice';

store.dispatch(getProducts());

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);