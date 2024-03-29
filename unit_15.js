let a2_res,
    a8_res = [],
    a9_res = [],
    a10_res = {},
    a11_res = [],
    a12_res = [],
    a15_res = [],
    a16_res = {},
    a18_res = {},
    a18_1_res = {},
    s20_res,
    s21_res
    ;

// Task 1 ============================================
/* Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.  */

function t1() {
    let a1 = new Set();
    a1.add(13);
    a1.add(16);
    a1.add('hello');
    a1.add('21');
    a1.add('world');
    console.log(a1);
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.Результат присвойте переменной a2_res. Действия запускаются при вызове функции t2. */

let a2 = new Set();

function t2(elem) {
    a2.add(elem);
    a2_res = a2;
    console.log(a2);
    document.querySelector('.i-2').value = '';
}

document.querySelector('.b-2').onclick = function () {
    t2(document.querySelector('.i-2').value);
}

// Task 3 ============================================
/* Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку(alert). */

function t3(elem) {
    if (elem != '') {
        a2.delete(elem);
        console.log(a2);
        document.querySelector('.i-3').value = '';
    }
    else {
        alert('Ошибка');
    }
}

document.querySelector('.b-3').onclick = function () {
    t3(document.querySelector('.i-3').value);
}

// Task 4 ============================================
/*  Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4. 
*/

function t4(elem) {
    document.querySelector('.i-4').value = '';
    return a2.has(elem);
}

document.querySelector('.b-4').onclick = function () {
    let res = t4(document.querySelector('.i-4').value);
    console.log(res);
}

// Task 5 ============================================
/*  Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции.
 Действия должны запускаться при вызове функции t5. */

function t5() {
    let size = a2.size;
    return size;
}

document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').innerHTML = t5();
    console.log(t5());
}

// Task 6 ============================================
/* Есть массив  a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6. Решение должно использовать set.
Действия должны запускаться при вызове функции t6. */

let a6 = [3, 4, 3, 2, 4, 56, 1, 23];

function t6(a6) {
    let a6Set = new Set(a6);
    return a6Set.size;
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').innerHTML = t6(a6);
    console.log(t6(a6));
}

// Task 7 ============================================
/*  Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем ее в массив (arr.split('')). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set. Функция должна возвращать true или false. Запуск - по нажатию кнопки b-7. */

function t7(login, pass) {
    let a7Arr = pass.split('');
    let a7Set = new Set();
    for (let value of pass) {
        a7Set.add(value);
    }
    if (a7Arr.length == a7Set.size) {
        return true;
    }
    else {
        return false;
    }
}

document.querySelector('.b-7').onclick = function () {
    let login = document.querySelector('.login').value;
    let pass = document.querySelector('.pass').value;
    let res = t7(login, pass);
    console.log(res);
}

// Task 8 ============================================
/* Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8. */

let a8 = new Set();
a8.add(0);
a8.add(1);
a8.add(2);
a8.add(3);
a8.add(4);
a8.add(5);
a8.add(6);
a8.add(7);
a8.add(8);
function t8(a8) {
    for (let item of a8) {
        if (item % 2 == 0) {
            a8_res.push(item);
        }
    }
    document.querySelector('.out-8').innerHTML = a8_res;
}
document.querySelector('.b-8').onclick = function () {
    t8(a8);
}


// Task 9 ============================================
/*  Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.*/

let a9 = new Set();
a9.add('a');
a9.add('b');
a9.add('c');
a9.add('d');
a9.add('e');

function t9(a9) {
    a9_res = Array.from(a9);
    a9_res = a9_res.reverse();
    document.querySelector('.out-9').innerHTML = a9_res;
}

document.querySelector('.b-9').onclick = function () {
    t9(a9);
}

// Task 10 ============================================
/*  Сложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно пропустить. Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. Результат присвойте массиву a10_res.
Логика решения: создайте на основе массива - набор. Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик. После прохода внутреннего цикла добавляете в a10_res запись в виде элемент набора - счетчик.
a10_res = {
    "3" : 5,
    "1" : 1,
}
 */

let a10 = [5, 7, 9, 11, 13, 15, 5, 7, 5, 2, 3, 7, 13];

function t10(a10) {
    let a10_set = new Set(a10);
    for (let item of a10_set) {
        let k10 = 0;
        for (let i = 0; i < a10.length; i++) {
            if ([item] == a10[i]) {
                k10++;
                a10_res[item] = k10;
            }
        }
    }
    console.log(a10_res);
}

document.querySelector('.b-10').onclick = function () {
    t10(a10);
}

// Task 11 ============================================
/*  Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происходит если такого значения в массиве нет. После каждой операции выводите a11_res на страницу.
 */

function t11(a11) {
    if (a11_res.indexOf(a11) == -1) {
        a11_res.push(a11);
        console.log(a11_res);
        document.querySelector('.out-11').innerHTML = a11_res;
        document.querySelector('.i-11').value = '';
    }
    else {
        document.querySelector('.i-11').value = '';
    }
}

document.querySelector('.b-11').onclick = function () {
    t11(document.querySelector('.i-11').value);
}

// Task 12 ============================================!
/*  Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12.
 */

let a12 = new Set();
a12.add('dog');
a12.add('cat');
a12.add('hamster');
a12.add('bird');
a12.add('fish');
function t12(a12) {
    a12_res = Array.from(a12);
    document.querySelector('.out-12').innerHTML = a12_res;
}
document.querySelector('.b-12').onclick = () => t12(a12);

// Task 13 ============================================!
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр.
    Действия должны запускаться при вызове функции t13.
 */

let set13 = new Set();
set13.add('angel');
set13.add('clown');
set13.add('drum');
set13.add('mandarin');
set13.add('sturgeon');
let elem13 = document.querySelector('.out-13');
function t13(set13, elem13) {
    elem13.innerHTML = '';
    for (let item of set13) {
        elem13.innerHTML += item + '&nbsp';
    }
}

document.querySelector('.b-13').onclick = () => {
    t13(set13, elem13);
}

// Task 14 ============================================
/*  
    Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Третий параметр - разделитель. 
        Действия должны запускаться при вызове функции t14.
        Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).
 */

let set14 = new Set();
let elem14 = document.querySelector('.out-14');
set14.add('temperature');
set14.add('pressure');
set14.add('humidity');
set14.add('wind');
set14.add('time');
let sep14 = '-';
function t14(a14) {
    let out14 = '';
    for (let item of set14) {
        out14 += item + sep14;
    }
    elem14.innerHTML = out14;
}
document.querySelector('.b-14').onclick = () => {
    t14(set14, elem14, sep14);
}

// Task 15 ============================================!
/*  
Дан массив a15. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор выведите на страницу. Добавление сделайте через цикл. 
    Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.
 */

let a15 = [
    [1, 0],
    [1, 0],
    [2, 0]
];
let a15_set = new Set();

function t15(a15) {
    for (let i = 0; i < a15.length; i++) {
        a15_set.add(a15[i]);
        console.log(a15_set);
    }
    for (let item of a15_set) {
        a15_res += item + '<br>';
    }
    document.querySelector('.out-15').innerHTML = a15_res;

}

document.querySelector('.b-15').onclick = function () {
    t15(a15);
}


// Task 16 ============================================
/* 
Дан массив a16 = [
    { Ivan: 1 },
    { Ivan: 1 },
    { Ivan: 2 },
    { Serg: 0 }
]. Добавьте вложенные в него массивы  в набор. Изучите результат. Результирующий набор  выведите в консоль. Добавление сделайте через цикл. 
    Действия должны запускаться при вызове функции t15. 
    Результат операции запишите в a16_res.
 */

let a16 = [
    { Ivan: 1 },
    { Ivan: 1 },
    { Ivan: 2 },
    { Serg: 0 }
];
let a16_set = new Set();

function t16(a16) {
    for (let i = 0; i < a16.length; i++) {
        a16_set.add(a16[i]);
        a16_res = a16_set;
    }
    console.log(a16_res);
}
document.querySelector('.b-16').onclick = function () {
    t16(a16);
}

// Task 17 ============================================
/*  Дана строка u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат.
    Действия должны запускаться при вызове функции t17.
 */

function t17() {
    let u17 = 'Primer';
    let u17_set = new Set(u17);
    console.log(u17_set);
}
document.querySelector('.b-17').onclick = t17;

// Task 18 ============================================

/*Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res. Действия должны запускаться при вызове функции t18.*/

let a18 = [5, 7, 9, 11, 13, 15];

function t18(a18) {
    let k18 = 0;
    let out18 = '';
    for (let item of a18) {
        out18 += k18 + '-' + item;
        k18++;
        out18 += '<br>'
    }
    document.querySelector('.out-18').innerHTML = out18;
    a18_res = out18;
}

document.querySelector('.b-18').onclick = function () { t18(a18) };


// Task 18-1 ============================================
/*  
    Очень сложное! Можно пропустить без последствий! Напишите функцию, которая принимает строку и считает сколько раз встречается та либо инная буква. Результат в виде ассоциативного массива присваивает в переменуню a18-1_res. Данную функцию можно использовать для анализа текста.
    Действия должны запускаться при вызове функции t18_1.
 */

let a18_1 = 'Hello';

function t18_1(a18_1) {
    let set_a18_1 = new Set(a18_1);
    let arr18_1 = a18_1.split('');
    for (let item of set_a18_1) {
        let key18_1 = 0;
        for (let i = 0; i < arr18_1.length; i++) {
            if ([item] == arr18_1[i]) {
                key18_1++;
                a18_1_res[item] = key18_1;
            }
        }
    }
    console.log(a18_1_res);
}
document.querySelector('.b-18_1').onclick = function () { t18_1(a18_1) };

// Task 19 ============================================!!!
/*  Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора.
    Действия должны запускаться при вызове функции t19.
 */

let a19 = new Set();
a19.add(11);
a19.add(22);
a19.add(33);
a19.add(44);
a19.add(55);
a19.add(66);
a19.add(77);
a19.add(88);

function t19() {
    let k19 = 0;
    let out19 = '';
    for (let item of a19) {
        if (k19 % 2 != 0) {
            out19 += item + '&nbsp';
        }
        k19++;
    }
    document.querySelector('.out-19').innerHTML = out19;
}

document.querySelector('.b-19').onclick = () => { t19(a19) };

// Task 20 ============================================!!!
/* Создайте функцию, которая принимает массив и четные по индексу элементы добавляет в набор s20_res в нечетные в набор s21_res. Выводите данные наборы в консоль.
 */

function t20(a20) {
    s20_res = '';
    s21_res = '';
    for (let i = 0; i < a20.length; i++) {
        if (i % 2 == 0) {
            s20_res += a20[i] + ', ';
        }
        else {
            s21_res += a20[i] + ', ';
        }
    }
    console.log(s20_res);
    console.log(s21_res);
}

document.querySelector('.b-20').onclick = function () {
    let arr20 = [10, 11, 12, 13, 14, 15, 16, 17];
    t20(arr20);
}
