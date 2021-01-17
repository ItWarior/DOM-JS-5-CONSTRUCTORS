// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// function Constructor(tag,descriptionTag,masAtr) {
//    this.tag = tag;
//    this.descriptionTag = tag + " " +descriptionTag;
//    this.masAtr = masAtr;
// }
// let a = new Constructor("a", "Установлює ссилку або якір", { "href": "Задает адрес документа, на который следует перейти.", "name": "Устанавливает имя якоря внутри документа.", "rel": "Отношения между ссылаемым и текущим документами." })

// let div = new Constructor("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого", { "align": "Задает выравнивание содержимого тега <div>.", "title": "Добавляет всплывающую подсказку к содержимому." })

// let h1 = new Constructor("h1", "Так, тег <h1> представляет собой наиболее важный заголовок первого уровня", { "align":"Определяет выравнивание заголовка."})

// let span = new Constructor("span", "Тег <span> предназначен для определения строчных элементов документа.", { "id": "Указывает имя стилевого идентификатора.", "dir": "Задает направление и отображение текста — слева направо или справа налево." })

// let input = new Constructor("input","Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",{"alt":"Альтернативный текст для кнопки с изображением.","align":"Определяет выравнивание изображения.","form":"Связывает поле с формой по её идентификатору."})

// let form = new Constructor("form","Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером",{"method":"Метод протокола HTTP.","name":"Имя формы.","enctype":"Способ кодирования данных формы."})

// let option = new Constructor("option","Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>",{"label":"Указание метки пункта списка.","disabled":"Заблокировать для доступа элемент списка."})

// let select = new Constructor("select","Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее",{"accesskey":"Позволяет перейти к списку с помощью некоторого сочетания клавиш","autofocus":"Устанавливает, что список получает фокус после загрузки страницы."})

// console.log(a, div, h1,span,input,form,option,select);

// ==============================================


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }

// class CreateTag {
//     constructor(tag,descriptionTag,masAtr) {
//         this.tag = tag;
//         this.descriptionTag = descriptionTag;
//         this.masAtr = masAtr;
//     }
// }

// let a = new CreateTag("a", "Установлює ссилку або якір", { "href": "Задает адрес документа, на который следует перейти.", "name": "Устанавливает имя якоря внутри документа.", "rel": "Отношения между ссылаемым и текущим документами." })

// let div = new CreateTag("div", "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого", { "align": "Задает выравнивание содержимого тега <div>.", "title": "Добавляет всплывающую подсказку к содержимому." })

// let h1 = new CreateTag("h1", "Так, тег <h1> представляет собой наиболее важный заголовок первого уровня", { "align":"Определяет выравнивание заголовка."})

// let span = new CreateTag("span", "Тег <span> предназначен для определения строчных элементов документа.", { "id": "Указывает имя стилевого идентификатора.", "dir": "Задает направление и отображение текста — слева направо или справа налево." })

// let input = new CreateTag("input","Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",{"alt":"Альтернативный текст для кнопки с изображением.","align":"Определяет выравнивание изображения.","form":"Связывает поле с формой по её идентификатору."})

// let form = new CreateTag("form","Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером",{"method":"Метод протокола HTTP.","name":"Имя формы.","enctype":"Способ кодирования данных формы."})

// let option = new CreateTag("option","Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>",{"label":"Указание метки пункта списка.","disabled":"Заблокировать для доступа элемент списка."})

// let select = new CreateTag("select","Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее",{"accesskey":"Позволяет перейти к списку с помощью некоторого сочетания клавиш","autofocus":"Устанавливает, что список получает фокус после загрузки страницы."})

// console.log(a, div, h1,span,input,form,option,select);
// ==============================================



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: "jt-100",
//     producer: "Korea",
//     age: 2020,
//     maxSpeed: 250,
//     horsePower: 150,
//     // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     driver: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     // -- info () - яка виводить всю інформацію про автомобіль
//     info: function () {
//         console.log(
//             `model : ${this.model},\nproducer : ${this.producer},\nage : ${this.age},\nmaxSpeed : ${this.maxSpeed},\nhorsePower : ${this.horsePower}`);
//     },
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed: function (newSpeed) {
//         return this.maxSpeed += newSpeed;
//     } ,
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear:function (newValue) {
//         return this.age = newValue;
//     },
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//     addDriver: function (driver) {
//         return this.driver = driver;
//     }
// }
// console.log(car);
// car.driver();
// car.info();
// car.changeYear(10);
// car.increaseMaxSpeed(100);
// car.addDriver({"name" : "Taras","age":29})

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car (model ,producer ,age ,maxSpeed ,horsePower) {
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.maxSpeed = maxSpeed;
//     this.horsePower = horsePower;

//     // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     this.drive = function () {
//         let result = `їдемо зі швидкістю ${this.maxSpeed} на годину`;
//         console.log(result);
//         return result;
//     };
//     // -- info () - яка виводить всю інформацію про автомобіль
//     this.info = function () {
//         let result = `Model : ${this.model}\nProduser : ${this.producer}\nAge : ${this.age}\nmaxSpeed : ${this.maxSpeed}\nhorsePower : ${this.horsePower}`;
//         console.log(result);
//         return result;
//     }
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//         return this.maxSpeed
//     }
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         console.log(this.age = newValue);
//         return this.age = newValue;
//     }
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//     this.addDriver = function () {
//         for (let i = 0; i < arguments.length; i++) {
//             this[i + "dreiver"] = arguments[i];
//             console.log(this[i + "dreiver"] );
//         }
//     }

// }

// let hundei = new Car("jt-100", "Korea", 2020, 250, 150);

// console.log(hundei);
// hundei.addDriver({name:"Taras",age:25,status:false},{name:"Igor",age:45,status:false},{name:"Nazar",age:22,status:false});
// console.log(hundei);

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor(model, producer, age, maxSpeed, horsePower) {
        
//         this.model = model;
//         this.producer = producer;
//         this.age = age;
//         this.maxSpeed = maxSpeed;
//         this.horsePower = horsePower;
//     }
//     // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//         drive() {
//         let result = `їдемо зі швидкістю ${this.maxSpeed} на годину`;
//         console.log(result);
//         return result;
//     };
//     // -- info () - яка виводить всю інформацію про автомобіль
//         info() {
//         let result = `Model : ${this.model}\nProduser : ${this.producer}\nAge : ${this.age}\nmaxSpeed : ${this.maxSpeed}\nhorsePower : ${this.horsePower}`;
//         console.log(result);
//         return result;
//     }
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//         increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpeed += newSpeed);
//         return this.maxSpeed
//     }
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//         changeYear(newValue) {
//         console.log(this.age = newValue);
//         return this.age = newValue;
//     }
//     // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//         addDriver() {
//         for (let i = 0; i < arguments.length; i++) {
//             this[i + "dreiver"] = arguments[i];
//             console.log(this[i + "dreiver"] );
//         }
//     }

// }


// let hundei = new Car("jt-100", "Korea", 2020, 250, 150);

// console.log(hundei);
// hundei.addDriver({name:"Taras",age:25,status:false},{name:"Igor",age:45,status:false},{name:"Nazar",age:22,status:false});
// console.log(hundei);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Popeluch {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let masPopeluch = [];

// let popel = new Popeluch("Anna", 25, 25);
// let pope2 = new Popeluch("Ira", 45, 24);
// let pope3 = new Popeluch("Bozena", 35, 32);
// let pope4 = new Popeluch("Durna", 15, 45);
// let pope5 = new Popeluch("Nata", 85, 26);
// let pope6 = new Popeluch("Paula", 41, 74);
// let pope7 = new Popeluch("Angela", 10, 56);
// let pope8 = new Popeluch("Lida", 16, 14);
// let pope9 = new Popeluch("Vira", 47, 10);
// let pope10 = new Popeluch("Oena", 66, 88);

// masPopeluch.push(popel, pope2, pope3, pope4, pope5, pope6, pope7, pope8, pope9, pope10);

// class Prinze {
//     constructor(name,age,fontshuz) {
//         this.name = name;
//         this.age = age;
//         this.fontshuz = fontshuz;
//     }
//     findPrinzes() {
//         let flag = false;
//         for (const iterator of masPopeluch) {
//             if (this.fontshuz === iterator.footSize) {
//                 console.log(`${this.name} знайшов свою ${iterator.name} з розтоптаною ногою ${this.fontshuz} розміру`);
//                 flag = true;
//             }
//         }
//         if (flag === false){
//             console.log(`${this.name} доведеться тобі бути холостим з тапком ${this.fontshuz} розміру))`);
//         }

//     }
// }

// let Prinze1 = new Prinze("Igor", 45, 26);
// Prinze1.findPrinzes();


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Prinzes(name,age,fontsize) {
//     this.name = name;
//     this.age = age;
//     this.fontsize = fontsize;
// }

// let prinzes0 = new Prinzes("Ira", 25, 32);
// let prinzes1 = new Prinzes("Natali", 26, 42);
// let prinzes2 = new Prinzes("Kaka", 44, 44);
// let prinzes3 = new Prinzes("Olena", 32, 42);
// let prinzes4 = new Prinzes("Igor", 20, 30);
// let prinzes5 = new Prinzes("Jenia", 24, 24);
// let prinzes6 = new Prinzes("Luba", 25, 25);
// let prinzes7 = new Prinzes("Liza", 21, 25);
// let prinzes8 = new Prinzes("Lina", 19, 34);
// let prinzes9 = new Prinzes("Olena", 25, 25);

// let masPrinzes = [];
// masPrinzes.push(prinzes0, prinzes1, prinzes2, prinzes3, prinzes4, prinzes5, prinzes6, prinzes7, prinzes8, prinzes9);

// function Prinz(name,age,fontsize) {
//     this.name = name;
//     this.age = age;
//     this.fontsize = fontsize;
//     this.serch = function () {
//         let flag = 0;
//         for (const iterator of masPrinzes) {
//             if (this.fontsize === iterator.fontsize) {
//                 flag++;
//                 console.log(`${this.name} ура ти знайшов свою ${iterator.name}`);
//             }
//         }
//         if (flag === 0) {
//             console.log(`${this.name} не засмучуйся в тебе ще все попереду`);
//         } else if(flag>1){
//             console.log(`${this.name} доведеться тобі вибирати між ${flag} принцесами`);
//         }

//     }
// }

// let prinz1 = new Prinz("Igor", 45, 25);
// prinz1.serch();