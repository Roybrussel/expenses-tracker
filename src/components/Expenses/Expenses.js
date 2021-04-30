import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler} />
				<ExpensesList expenses={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
