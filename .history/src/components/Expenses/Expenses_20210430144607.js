import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const date = new Date();
const currentYear = date.getFullYear();

const Expenses = (props) => {
	const [
		selectedYear,
		setSelectedYear
	] = useState(currentYear);

	const filterChangeHandler = (selectedFilterYear) => {
		setSelectedYear(selectedFilterYear);
		console.log(selectedFilterYear);
	};

	return (
		<div className="expenses">
			<Card>
				<ExpensesFilter onChangeFilter={filterChangeHandler} />
				{props.expenses.map((expense) => {
					return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />;
				})}
			</Card>
		</div>
	);
};

export default Expenses;
