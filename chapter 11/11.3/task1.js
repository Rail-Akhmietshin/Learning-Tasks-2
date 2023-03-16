// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2);
// Против:
// promise.then(f1, f2);


// Нет, не эквивалентны, так как в перовм случае при завершении выполнения функции f1 ошибкой существует обработчик этой ошибки функцией f2
// А во втором примере функция f2 обрабатывает наличие ошибок только у начального promise, но не у f1