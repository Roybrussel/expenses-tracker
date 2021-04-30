import React from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	return (
		<div>
			<ExpensesFilter />

			<Card className="expenses">
				{props.expenses.map((expense) => {
					return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />;
				})}
			</Card>
		</div>
	);
};

export default Expenses;
