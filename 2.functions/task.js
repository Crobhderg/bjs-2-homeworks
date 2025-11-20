function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}


function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;

	let min = Math.min(...arr);
	let max = Math.max(...arr);

	return max - min;
}


function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) return 0;

	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}