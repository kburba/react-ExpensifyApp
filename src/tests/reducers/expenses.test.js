import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should add expense',() => {
    const currentState = [expenses[1]];
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    }
    const state = expensesReducer(currentState, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should remove expense', () => {
    const currentState = [expenses[0], expenses[1]]
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state = expensesReducer(currentState, action);
    expect(state).toEqual([expenses[0]])
});

test('should edit expense', () => {
    const updates = expenses[0]
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual(expenses[0])
});

test('should not edit expense if id not found', () => {
    const updates = expenses[0]
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})