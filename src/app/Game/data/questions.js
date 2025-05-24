// export const questions = [
//   // HTML / CSS (10 вопросов)
//   {
//     id: 1,
//     question: "Какой тег используется для создания гиперссылки?",
//     answer: "<a>",
//     options: ["<a>", "<link>", "<href>", "<url>"]
//   },
//   {
//     id: 2,
//     question: "Какой тег используется для вставки изображения?",
//     answer: "<img>",
//     options: ["<image>", "<src>","<img>", "<pic>"]
//   },
//   {
//     id: 3,
//     question: "Какой атрибут используется для добавления всплывающей подсказки при наведении?",
//     answer: "title",
//     options: [ "alt", "hover", "tooltip","title"]
//   },
//   {
//     id: 4,
//     question: "Какой тег обозначает таблицу в HTML?",
//     answer: "<table>",
//     options: [ "<tab>","<table>", "<grid>", "<tbody>"]
//   },
//   {
//     id: 5,
//     question: "Какое CSS-свойство отвечает за размер шрифта?",
//     answer: "font-size",
//     options: [ "text-size","font-size", "font-style", "size"]
//   },
//   {
//     id: 6,
//     question: "Какой селектор выбирает все элементы с классом .button?",
//     answer: ".button",
//     options: [".button", "#button", "button", "*button"]
//   },
//   {
//     id: 7,
//     question: "Как задать жирный текст в CSS?",
//     answer: "font-weight: bold;",
//     options: ["font-weight: bold;", "text-weight: bold;", "font-style: bold;", "font: bold;"]
//   },
//   {
//     id: 8,
//     question: "Что делает свойство `position: fixed;`?",
//     answer: "Закрепляет элемент на экране",
//     options: [
//       "Закрепляет элемент на экране",
//       "Позиционирует относительно родителя",
//       "Скрывает элемент",
//       "Центрирует элемент"
//     ]
//   },
//   {
//     id: 9,
//     question: "Как задать отступ внутри элемента?",
//     answer: "padding",
//     options: ["padding", "margin", "space", "gap"]
//   },
//   {
//     id: 10,
//     question: "Что делает тег <br>?",
//     answer: "Добавляет перенос строки",
//     options: [
//       "Добавляет перенос строки",
//       "Жирный текст",
//       "Создаёт раздел",
//       "Вставляет картинку"
//     ]
//   },
//   {
//     id: 11,
//     question: "Как объявить переменную?",
//     answer: "let x = 5;",
//     options: ["let x = 5;", "variable x = 5;", "int x = 5;", "x := 5;"]
//   },
//   {
//     id: 12,
//     question: "Какой метод выводит сообщение в консоль?",
//     answer: "console.log()",
//     options: ["console.log()", "log()", "alert()", "print()"]
//   },
//   {
//     id: 13,
//     question: "Какой тип данных представляет логическое значение?",
//     answer: "boolean",
//     options: ["boolean", "string", "number", "null"]
//   },
//   {
//     id: 14,
//     question: "Как проверить строгое равенство в JavaScript?",
//     answer: "===",
//     options: ["===", "==", "=", "!="]
//   },
//   {
//     id: 15,
//     question: "Что делает `typeof`?",
//     answer: "Определяет тип значения",
//     options: [
//       "Определяет тип значения",
//       "Проверяет наличие свойства",
//       "Изменяет тип",
//       "Проверяет на null"
//     ]
//   },
//   {
//     id: 16,
//     question: "Какой результат у выражения: `typeof null`?",
//     answer: "object",
//     options: ["object", "null", "undefined", "boolean"]
//   },
//   {
//     id: 17,
//     question: "Что вернёт `Boolean('')`?",
//     answer: "false",
//     options: ["false", "true", "null", "undefined"]
//   },
//   {
//     id: 18,
//     question: "Какой метод используется для добавления элемента в конец массива?",
//     answer: "push()",
//     options: ["push()", "pop()", "shift()", "unshift()"]
//   },
//   {
//     id: 19,
//     question: "Какой метод преобразует JSON-строку в объект?",
//     answer: "JSON.parse()",
//     options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"]
//   },
//   {
//     id: 20,
//     question: "Что делает метод `addEventListener`?",
//     answer: "Добавляет обработчик события",
//     options: [
//       "Добавляет обработчик события",
//       "Удаляет элемент",
//       "Создаёт элемент",
//       "Меняет стиль"
//     ]
//   },
//   {
//     id: 21,
//     question: "Что такое NaN в JavaScript?",
//     answer: "Результат недопустимой математической операции",
//     options: [
//       "Результат недопустимой математической операции",
//       "Неверный тип",
//       "Тип undefined",
//       "Ошибка компиляции"
//     ]
//   },
//   {
//     id: 22,
//     question: "Какой метод используется для удаления последнего элемента массива?",
//     answer: "pop()",
//     options: ["pop()", "shift()", "splice()", "remove()"]
//   },
//   {
//     id: 23,
//     question: "Что делает цикл `for`?",
//     answer: "Выполняет код определённое количество раз",
//     options: [
//       "Выполняет код определённое количество раз",
//       "Ждёт завершения задачи",
//       "Удаляет элементы",
//       "Проверяет тип"
//     ]
//   },
//   {
//     id: 24,
//     question: "Какое ключевое слово используется для создания функции?",
//     answer: "function",
//     options: ["function", "func", "def", "method"]
//   },
//   {
//     id: 25,
//     question: "Какой символ используется для однострочного комментария?",
//     answer: "//",
//     options: ["//", "/*", "<!--", "#"]
//   },
//   {
//     id: 26,
//     question: "Какое значение по умолчанию у неинициализированной переменной?",
//     answer: "undefined",
//     options: ["undefined", "null", "0", "NaN"]
//   },
//   {
//     id: 27,
//     question: "Как вызвать функцию `myFunc`?",
//     answer: "myFunc()",
//     options: ["myFunc()", "call myFunc", "run myFunc", "invoke(myFunc)"]
//   },
//   {
//     id: 28,
//     question: "Что такое массив?",
//     answer: "Упорядоченная коллекция значений",
//     options: [
//       "Упорядоченная коллекция значений",
//       "Пара ключ-значение",
//       "Функция",
//       "Стиль отображения"
//     ]
//   },
//   {
//     id: 29,
//     question: "Что делает метод `filter()`?",
//     answer: "Создает массив, отфильтровывая элементы",
//     options: [
//       "Создает массив, отфильтровывая элементы",
//       "Сортирует массив",
//       "Проверяет тип",
//       "Удаляет объект"
//     ]
//   },
//   {
//     id: 30,
//     question: "Что делает метод `includes()`?",
//     answer: "Проверяет, содержит ли массив значение",
//     options: [
//       "Проверяет, содержит ли массив значение",
//       "Добавляет элемент в массив",
//       "Удаляет элемент",
//       "Изменяет массив"
//     ]
//   }
// ]

export const questions = [
  {
    id: 1,
    question: "Какой тег используется для создания списка с нумерацией?",
    answer: "<ol>",
    options: ["<ul>", "<ol>", "<li>", "<list>"]
  },
  {
    id: 2,
    question: "Какое свойство CSS отвечает за внешний отступ элемента?",
    answer: "margin",
    options: ["padding", "border", "margin", "space"]
  },
  {
    id: 3,
    question: "Какой тег используется для наименования таблицы столбцов?",
    answer: "<th>",
    options: ["<td>", "<tr>", "<th>", "<col>"]
  },
  {
    id: 4,
    question: "Какой атрибут используется для указания пути к изображению в теге `<img>`?",
    answer: "src",
    options: ["href", "src", "alt", "path"]
  },
  {
    id: 5,
    question: "Какой тег используется для создания выпадающего списка?",
    answer: "<select>",
    options: ["<input>", "<dropdown>", "<select>", "<option>"]
  },
  {
    id: 6,
    question: "Какой CSS-селектор выбирает элемент по ID?",
    answer: "#id",
    options: ["#id", ".id", "id", "$id"]
  },
  {
    id: 7,
    question: "Какой тег отвечает за жирное начертание текста в HTML?",
    answer: "<b>",
    options: ["<strong>", "<b>", "<bold>", "<text-bold>"]
  },
  {
    id: 8,
    question: "Какой тег используется для создания строки в таблице?",
    answer: "<tr>",
    options: ["<tr>", "<td>", "<table-row>", "<row>"]
  },
  {
    id: 9,
    question: "Как задать цвет фона в CSS?",
    answer: "background-color",
    options: ["background", "color-bg", "bg-color", "background-color"]
  },
  {
    id: 10,
    question: "Какой тег используется для наименования полей формы?",
    answer: "<label>",
    options: ["<label>", "<input>", "<form>", "<name>"]
  },

  {
    id: 11,
    question: "Как объявить переменную, которую нельзя переопределить?",
    answer: "const",
    options: [ "let", "static","const", "var"]
  },
  {
    id: 12,
    question: "Какой оператор используется для сложения чисел?",
    answer: "+",
    options: ["+", "*", "-", "="]
  },
  {
    id: 13,
    question: "Какой тип данных хранит текст?",
    answer: "string",
    options: [ "boolean","string", "number", "text"]
  },
  {
    id: 14,
    question: "Какой символ завершает инструкцию JavaScript?",
    answer: ";",
    options: [";", ".", ":", ","]
  },
  {
    id: 15,
    question: "Что делает метод `alert()`?",
    answer: "Выводит сообщение в окне браузера",
    options: [
      "Выводит сообщение в окне браузера",
      "Очищает страницу",
      "Переходит по ссылке",
      "Показывает HTML-код"
    ]
  },
  {
    id: 16,
    question: "Что означает `===` в JavaScript?",
    answer: "Сравнение по значению и типу",
    options: [
      "Сравнение по значению и типу",
      "Присваивание",
      "Проверка на null",
      "Логическое И"
    ]
  },
  {
    id: 17,
    question: "Какой тип данных возвращает `true` или `false`?",
    answer: "boolean",
    options: [ "string", "null", "number","boolean"]
  },
  {
    id: 18,
    question: "Как преобразовать строку в число?",
    answer: "Number()",
    options: [ "parseText()","Number()", "toInt()", "String()"]
  },
  {
    id: 19,
    question: "Что делает метод `prompt()`?",
    answer: "Спрашивает ввод у пользователя",
    options: [
      "Спрашивает ввод у пользователя",
      "Выводит сообщение",
      "Добавляет элемент",
      "Удаляет объект"
    ]
  },
  {
    id: 20,
    question: "Что делает `console.log()`?",
    answer: "Выводит информацию в консоль",
    options: [
      
      "Выводит сообщение пользователю",
      "Создаёт переменную",
      "Открывает окно",
      "Выводит информацию в консоль",
    ]
  },
  {
    id: 21,
    question: "Какой символ используется для логического И?",
    answer: "&&",
    options: ["&&", "||", "&", "and"]
  },
{
  id: 22,
  question: "Что делает условный оператор `if`?",
  answer: "Выполняет код, если условие истинно",
  options: [
    "Выполняет код, если условие истинно",
    "Всегда выполняет код",
    "Повторяет код несколько раз",
    "Останавливает выполнение функции"
  ]
},
{
  id: 23,
  question: "Какой синтаксис используется для `else if` в JavaScript?",
  answer: "else if (условие) { ... }",
  options: [
    "else if (условие) { ... }",
    "elseif условие: ...",
    "else (if условие) { ... }",
    "if else (условие) => ..."
  ]
},
  {
    id: 24,
    question: "Какой тип данных может быть результатом выражения `2 > 3`?",
    answer: "boolean",
    options: ["boolean", "number", "null", "object"]
  },
  {
    id: 25,
    question: "Что такое `null` в JavaScript?",
    answer: "Специальное значение 'ничего'",
    options: [
      "Специальное значение 'ничего'",
      "Ошибка",
      "Ноль",
      "Отсутствие переменной"
    ]
  },
  {
    id: 26,
    question: "Какой метод массива возвращает его длину?",
    answer: "length",
    options: ["length", "size()", "count()", "getLength()"]
  },
  {
    id: 27,
    question: "Что вернёт выражение `typeof 42`?",
    answer: "number",
    options: ["number", "string", "object", "boolean"]
  },
  {
    id: 28,
    question: "Как задать условие в `if`?",
    answer: "if (условие) { ... }",
    options: [
      "if (условие) { ... }",
      "if условие: ...",
      "if {условие}",
      "if => условие"
    ]
  },
  {
  id: 29,
  question: "Что делает оператор `switch` в JavaScript?",
  answer: "Сравнивает значение с множеством вариантов",
  options: [
    "Сравнивает значение с множеством вариантов",
    "Создаёт новую переменную",
    "Проверяет тип данных",
    "Выполняет цикл по массиву"
  ]
}
,
  {
    id: 30,
    question: "Что делает `Math.random()`?",
    answer: "Генерирует случайное число",
    options: [
      "Генерирует случайное число",
      "Округляет число",
      "Проверяет чётность",
      "Создаёт массив"
    ]
  }
];
