import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 8000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent Bill', amount: 109500 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
)

ReactDOM.render(jsx, document.getElementById('app'));
