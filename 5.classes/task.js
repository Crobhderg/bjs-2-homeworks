// Базовый класс
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}
}

// Журнал
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

// Книга
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

// Роман
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

// Фантастика
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

// Детектив
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// Библиотека
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let book of this.books) {
			if (book[type] === value) {
				return book;
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index === -1) {
			return null;
		}
		return this.books.splice(index, 1)[0];
	}
}

// Тестовый сценарий
const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Шерлок Холмс — Полное собрание",
		2019,
		1008
	)
);

library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));

library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log("До поиска:", library.books.length);

// Поиск книги 1919 года
let book1919 = library.findBookBy("releaseDate", 1919);

if (!book1919) {
	console.log("Книги 1919 года нет. Создаём...");
	book1919 = new Book("Неизвестный автор", "Редкая книга", 1919, 200);
	library.addBook(book1919);
}

console.log("После добавления:", library.books.length);

// Выдаём любую книгу
const givenBook = library.giveBookByName("Машина времени");
console.log("Выдано:", givenBook ? givenBook.name : null);
console.log("Книг осталось:", library.books.length);

// Повреждаем
if (givenBook) {
	givenBook.state = 10;
	console.log("Состояние после повреждения:", givenBook.state);

	// Чиним
	givenBook.fix();
	console.log("После восстановления:", givenBook.state);

	// Пытаемся вернуть
	library.addBook(givenBook);
	console.log("После попытки вернуть книгу:", library.books.length);
}

// Класс Student
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {}; // { предмет: [оценки] }
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}

		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject] || this.marks[subject].length === 0) {
			return 0;
		}
		const sum = this.marks[subject].reduce((acc, m) => acc + m, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}

		let total = 0;

		for (let subject of subjects) {
			total += this.getAverageBySubject(subject);
		}

		return total / subjects.length;
	}
}

// Пример
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");
console.log("Средняя по физике:", student.getAverageBySubject("физика"));
console.log("Общий средний:", student.getAverage());