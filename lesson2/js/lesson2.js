// 1. Дан код:
console.log('Задание 1');
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - оператор ++ используемый в качестве префикса, добавляет единицу к своему операнду и возвращает результат
// d = b++; alert(d);           // 1 - оператор ++ используемый в качестве постфикса, возвращает значение операнда до добавления к нему единицы
// c = (2+ ++a); alert(c);      // 5 - к переменной "а"" уже был применен оператор "++"" и поэтому текущее значение переменной а = 3
// d = (2+ b++); alert(d);      // 4 - та же история, к переменной "b" уже был применен оператор ++ и поэтому текущее значение b = 2
// alert(a);                    // 3 - к переменной "а" был 2 раза применен оператор ++, более, переменную не переназначали, поэтому значение а = 3
// alert(b);                    // 3 - тоже самое

// Почему код даёт именно такие результаты?
console.log('--------------------');


// 2. Чему будет равен x в примере ниже?
console.log('Задание 2');
var a = 2;
var x = 1 + (a *= 2);
console.log('x = ' + x);
// Ответ:
// сачала выпонляется выражение в скобках оно равно a = a * 2, т.к. изначально а = 2, получаем а = 2 * 2ищ и прибавляем 1
// x == 5
console.log('--------------------');


/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
console.log('Задание 3');

function getRandomInt(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed());
}


a = getRandomInt(-10, 10);
b = getRandomInt(-20, 20);

function res(a, b){
    if (a >= 0 && b >= 0) {
        // console.log(sub(a, b));
        return sub(a, b);
    }
    else if (a < 0 && b < 0){
        // console.log(multip(a, b));
        return multip(a, b);
    }
    else {
        // console.log(sum(a, b));
        return sum(a, b);
    }
}

console.log('A = ' + a);
console.log('B = ' + b);
console.log('result = ' + res(a, b));
console.log('--------------------');

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
console.log('Задание 4');
a = getRandomInt(0, 15);
console.log('A = ' + a);
function rangeOutput(a){
    switch (a) {
        case 0:
            console.log("0");
        case 1:
            console.log("1");
        case 2:
            console.log("2");
        case 3:
            console.log("3");
        case 4:
            console.log("4");
        case 5:
            console.log("5");
        case 6:
            console.log("6");
        case 7:
            console.log("7");
        case 8:
            console.log("8");
        case 9:
            console.log("9");
        case 10:
            console.log("10");
        case 11:
            console.log("11");
        case 12:
            console.log("12");
        case 13:
            console.log("13");
        case 14:
            console.log("14");
        case 15:
            console.log("15");
        }
}
rangeOutput(a);
console.log('--------------------');

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
console.log('Задание 5');
function sum(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function multip(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}
console.log('--------------------');

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3)
// и вернуть полученное значение (использовать switch).
console.log('Задание 6');
prompt('Укажите оператор (+, -, *, /):');
function mathOperation(arg1, arg2, operation){
    switch (operation) {
      case "+":
        return sum(arg1, arg2);
      case "-":
        return sub(arg1, arg2);
      case "*":
        return multip(arg1, arg2);
      case "/":
        return division(arg1, arg2);
      default:
        alert( "Оператор указан не верно!" );
    }
}
console.log('result = ' + mathOperation(10, 5, '+'));
console.log('--------------------');

// 7) *Сравнить null и 0. Попробуйте объяснить результат.
console.log('Задание 7');

console.log('null > 0');  // false
console.log(null > 0);
console.log('null == 0'); // false
console.log(null == 0);
console.log('null >= 0'); // true
console.log(null >= 0);

При сравнении > < >= <=, null приводится к нулю, поэтому выражение null >= 0 - истинное, а null > 0 - ложное.
при сравнении null == 0, выражение ложное, потому, что для этого сравнения null ни к чему не приводится и равно undefined

console.log('--------------------');


// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

