import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
})

test('should correctly add up one expense', () => {
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(109500);
})

test('should correct add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(113195);
})