// 1 Напишіть функцію для перетворення рядка в нижній регістр

let lowercase = prompt("");
function change(lowercase) {
  return lowercase.toLowerCase();
}
console.log(change(lowercase));

// 2 Напишіть функцію для перетворення рядка у верхній регістр

let lowercase2 = prompt("");
function change2(lowercase2) {
  return lowercase2.toUpperCase();
}
console.log(change2(lowercase2));

// 3 Напишіть функцію яка приймає рядок та повертає його у вигляді
// [Перша літера з великої інші з маленької]

// let lowercase3 = prompt("");
// function change3(lowercase3) {
//   return (
//     lowercase3[0].toUpperCase() + lowercase3.slice(1, lowercase3.length - 1).toLowerCase()
//   );
// }
// console.log(change3(lowercase3));

// 4 Напишіть функцію для перевірки довжини рядка

let lowercase4 = prompt("");
function change4() {
  return lowercase4.length - 1;
}
console.log(change4());

// 5 Напишіть функцію для пошуку заданого слова в рядку

let lowercase5 = prompt("");
function change5(abcd) {
  return lowercase5.indexOf(abcd);
}
console.log(change5("abcd"));

// 6 Напишіть функцію для перевірки типу файлу

let lowercase6 = prompt("");
let foto = `Це фото`;
let video = `Це відео`;
let value = `Невідомий формат`;
function change6(lowercase6) {
  if (
    lowercase6.substring(lowercase6.length - 3) == "png" ||
    lowercase6.substring(lowercase6.length - 3) == "jpg" ||
    lowercase6.substring(lowercase6.length - 3) == "jpeg"
  ) {
    return foto;
  } else if (
    lowercase6.substring(lowercase6.length - 3) == "avi" ||
    lowercase6.substring(lowercase6.length - 6) == "mpeg-4"
  ) {
    return video;
  } else {
    return value;
  }
}
console.log(change6(lowercase6));

// 7 - Напишіть функцію для перевірки правильності введення логіна та
// пароля
let lowercase7 = prompt("Вdедіть свій логін");
let lowercase8 = prompt("Вdедіть свій пароль");
const form = {
  login: "flunt",
  pas: "1234",
};
function change7(lowercase7, lowercase8) {
  let a = "Вхід виконано";
  let b = "Логін або пароль невірний";
  if (lowercase7 == form.login && lowercase8 == form.pas) {
    return a;
  } else if (lowercase7 != form.login || lowercase8 != form.pas) {
    return b;
  }
}
console.log(change7(lowercase7, lowercase8));

// 8 Створити функцію getMaxDigit(number)
// – яка отримує будь-яке число та виводить
// найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

let number = prompt("Введіть будь яке число");

function getMaxDigit(number) {
  let arr = number.toString().split("");
  for (i = 0; i <= arr.length - 1; i++) {
    arr[i] = parseInt(arr[i]);
  }
  return Math.max(...arr);
}
console.log(getMaxDigit(number));

// 9 Створити функцію, яка вираховує суму, що залишається
//  після оплати податку від зарабітньої плати.
//  (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

let salary = parseInt(prompt("Введіть свою зарплату"));
const tax = 1.5;
const tax1 = 18;
function calculation() {
  return (salary * (100 - (tax + tax1))) / 100;
}
console.log(`Ваша зарплата після сплати податків - ${calculation()} грн`);
