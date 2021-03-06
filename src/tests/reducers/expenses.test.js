import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    expect(expensesReducer(expenses, action)).toEqual([expenses[0], expenses[2]]);
});


test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    expect(expensesReducer(expenses, action)).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Sneakers',
        amount: 16500,
        note: '',
        createdAt: moment(0).valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    expect(expensesReducer(expenses, action)).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    expect(expensesReducer(expenses, action)[1].amount).toEqual(amount);
});

test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    
    expect(expensesReducer(expenses, action)).toEqual(expenses);
});


test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    expect(expensesReducer(expenses, action)).toEqual([expenses[1]]);
});