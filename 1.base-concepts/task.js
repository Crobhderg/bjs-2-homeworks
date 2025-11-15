"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	} else {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	if (
		isNaN(percent) ||
		isNaN(contribution) ||
		isNaN(amount) ||
		isNaN(countMonths)
	) {
		return false;
	}

	let loanBody = amount - contribution;

	let monthlyRate = percent / 100 / 12;


	let monthlyPayment =
		loanBody *
		(monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));


	let totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}