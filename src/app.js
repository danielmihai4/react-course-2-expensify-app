import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
)

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});


