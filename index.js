const readline = require('readline');
const { enterNumbers } = require('./input');
const { add } = require('./add');
const { subtract } = require('./subtract');
const { divide } = require('./divide');
const { power } = require('./power');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let a = 0, b = 0;

function menu() {
  console.log('\n=== Меню ===');
  console.log('1. Ввести два числа');
  console.log('2. Сложение');
  console.log('3. Вычитание');
  console.log('4. Деление');
  console.log('5. Возведение в степень');
  console.log('0. Выход');
  rl.question('Выберите пункт: ', (choice) => {
    if (choice === '1') {
      rl.question('Введите первое число: ', (x) => {
        rl.question('Введите второе число: ', (y) => {
          [a, b] = enterNumbers(x, y);
          menu();
        });
      });
      return;
    }
    if (choice === '2') console.log('Результат:', add(a, b));
    else if (choice === '3') console.log('Результат:', subtract(a, b));
    else if (choice === '4') console.log('Результат:', divide(a, b));
    else if (choice === '5') console.log('Результат:', power(a, b));
    else if (choice === '0') { rl.close(); return; }
    else console.log('Нет такого пункта');
    menu();
  });
}

menu();
