const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(
	(num) => {
		double.push(num * 2);
    }
)

const filterArray = array.filter(num => num > 5)

const reduceArray = array.reduce()