import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [
    {
        description: 'Guma',
        note: '',
        amount: '1000',
        createdAt: 0
    },
    {
        description: 'Saldainiai',
        note: 'perkam saldainius',
        amount: '200',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        description: 'Alus',
        note: '',
        amount: '555',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

test('should filter by text value', () => {
    const filters = {
        text: 'u',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0] ]);
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses( expenses, filters );

    expect(result).toEqual( [ expenses[2], expenses[0] ])
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})