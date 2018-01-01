import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should create removeExpense object', () => {
    const action = removeExpense({ id: 'abc123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })
});

test('should create editExpense object', () => {
    const updates = {
        description: 'testdescription',
        note: 'testnote',
        amount: 123,
        createdAt: 456
    };
    const action = editExpense( '111' , updates );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '111', 
        updates: {
            description: 'testdescription',
            note: 'testnote', 
            amount: 123, 
            createdAt: 456
        }
    })
})

test('should setup addExpense with provided values', () => {
    const expenseData = {
        description: 'testdescription',
        note: 'testnote',
        amount: 123,
        createdAt: 456
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})