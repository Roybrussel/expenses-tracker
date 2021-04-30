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
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === selectedYear;
	});

	let expensesContent;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
		));
	} else {
		expensesContent = <p>No expenses found.</p>;
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler} />
				{expensesContent}
			</Card>
		</div>
	);
};

export default Expenses;
