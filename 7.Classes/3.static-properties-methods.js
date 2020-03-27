// class User {
//   static staticMethod() {
//     console.log(this === User);
//   }
//
//   justMethod() {
//     console.log(this);
//   }
// }
//
// User.staticMethod(); // true
// User.justMethod(); // User.justMethod is not a function
// let user = new User();
// user.justMethod(); // User {}
//
// class User {}
//
// User.staticMehod = function () {
//   console.log(this === User);
// };
//
// /**
//  * this при вызове -- User, "объект до точки"
//  * Статические методы для реализации методов класса, а не конкретных его объектов
//  * Например, есть объекты статей Article, и нам нужна функция для их сравнения.
//  * Естсественное решение -- сделать для этого метод Article.compare:
//  */
//
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//
//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }
//
// // Использование:
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1)),
// ];
//
// articles.sort(Article.compare);
//
// console.log(articles[0].title); // CSS
//
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//
//   static createTodays() {
//     // помним, что this = Article
//     return new this("Сегодняшний дайджест", new Date());
//   }
// }
//
// let article = Article.createTodays();
//
// console.log(article.title);
// /*
//  Теперь каждый раз, когда нам нужно создать сегодняшнюю статю, мы вызываем Article.createTodays()
//  Ещё раз, это не метод каждой статьи, а всего класса в целом.
//  */
//
// // Статические могут использоваться для DB:
// // предположим, что Article - это специальный класс для управления статьями
// // статический метод для удаления статьи:
// Article.remove({ id: 12345 });
//
// // Статические свойства:
// class Article {
//   static publisher = "Some Person";
// }
//
// console.log(Article.publisher); // Some Person
//
// Article.publisher = "Other Person";
//
// // Статические методы и свойства наследуются
// class Animal {
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }
//
//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//
//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }
//
// // Наследует от Animal
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }
//
// let rabbits = [new Rabbit("Белый кролик", 10), new Rabbit("Чёрный кролик", 5)];
//
// rabbits.sort(Rabbit.compare);
//
// rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.
//
// class Animal {}
// class Rabbit extends Animal {}
//
// // для статики
// console.log(Rabbit.__proto__ === Animal); // true
//
// // для обычных методов
// console.log(Rabbit.prototype.__proto__ === Animal.prototype);

/** Итого
 * Статические методы используются для функциональности, принадлежат классу в целом, а не конкретному инстансу.
 * Например, Article.compare(article1, article2) или Article.createTodays()
 * В объявлении класса они помечаются ключевым словом static
 * Статические свойства используются тогда, когда мы хотим хранить данные на уровне всего класса, а не инстанса.
 * Cинтаксис:
     class MyClass {
      static property = ...;

      static method() {
        ...
      }
    }
 * Технически, статическое объявление – это то же самое, что и присвоение классу:
 * MyClass.propert = ...
 * MyClass.method = ...
 *
 * Статические свойства и методы наследуются.
 * Для class B extends A... Если поле не найдено в B, поиск продолжается в A.
 */



