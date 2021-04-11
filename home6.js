// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
//a)
// let numbers = [23,55,66,77,86,4,3,22,1,8,0,9,888,52,11,2,34,55,98,54];
//
// let arr = numbers.sort((a, b) => a - b)
// console.log(arr);
//
//b)
// let numbers = [23,55,66,77,86,4,3,22,1,8,0,9,888,52,11,2,34,55,98,54];
//
// let arr = numbers.sort((a, b) => b - a)
// console.log(arr);
//
// c)
// let numbers = [23,55,66,77,86,4,3,22,1,8,0,9,888,52,11,2,34,55,98,54];
//
// console.log(numbers.filter(x => !(x%3)));
//
//
// d) Відфілтрувати числа які є більшими за 10.
// let numbers = [23,55,66,77,86,4,3,22,1,8,0,9,888,52,11,2,34,55,98,54];
// console.log(numbers.filter(x => x>10));
//
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let numbers = [23,55,66,77,86,4,3,22,1,8,0,9,888,52,11,2,34,55,98,54];
// numbers.forEach(element => document.write(element));
//
//
//
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let numbers = [23,55,66,77,86,4,3,22,1,8,0,9,888,52,11,2,34,55,98,54];
// console.log(numbers.map(x => x*3))
//
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)******
//
//
// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// let stringArray = ['vasya','petya','kolya','olya', 'max', 'anya', 'oleg', 'andrey','masha','olya','max','vasya','petya','kolya','olya']
// console.log(stringArray.sort(((a, b) => {
//     let nameA = a.toUpperCase();
//     let nameB = b.toUpperCase()
//     if (nameA < nameB) {
//         return -1
//     }
//     if (nameA > nameB) {
//         return 1
//     }
// return 0
// })))
//
// b) Відсортувати в зворотньому порядку
//
// let stringArray = ['vasya','petya','kolya','olya', 'max', 'anya', 'oleg', 'andrey','masha','olya','max','vasya','petya','kolya','olya']
// console.log(stringArray.sort(((a, b) => {
//     let nameA = a.toUpperCase();
//     let nameB = b.toUpperCase()
//     if (nameA < nameB) {
//         return 1
//     }
//     if (nameA > nameB) {
//         return -1
//     }
//     return 0
// })))
//
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//
// let stringArray = ['vasya','petya','kolya','olya', 'max', 'anya', 'oleg', 'andrey','masha','olya','max','vasya','petya','kolya','olya']
//
// let newArray = stringArray.filter(x => x.length > 4)
// console.log(newArray);
//
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let stringArray = ['vasya','petya','kolya','olya', 'max', 'anya', 'oleg', 'andrey','masha','olya','max','vasya','petya','kolya','olya']
// let newArray = stringArray.map(x => {
//     return 'Sam Says ' + x
// })
//
// console.log(newArray);
//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// const users = [
//          {name: 'vasya', age: 31, isMarried: false},
//          {name: 'petya', age: 30, isMarried: true},
//          {name: 'kolya', age: 29, isMarried: true},
//          {name: 'olya', age: 28, isMarried: false},
//          {name: 'max', age: 30, isMarried: true},
//          {name: 'anya', age: 31, isMarried: false},
//          {name: 'oleg', age: 28, isMarried: false},
//          {name: 'andrey', age: 29, isMarried: true},
//          {name: 'masha', age: 30, isMarried: true},
//          {name: 'olya', age: 31, isMarried: false},
//          {name: 'max', age: 31, isMarried: true}
//     ]
// console.log(users.sort(((a, b) => {
//     let nameA = a.age;
//     let nameB = b.age
//     if (nameA < nameB) {
//         return -1
//     }
//     if (nameA > nameB) {
//         return 1
//     }
// return 0
// })))


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ]
// console.log(users.sort(((a, b) => {
//     let nameA = a.age;
//     let nameB = b.age
//     if (nameA < nameB) {
//         return 1
//     }
//     if (nameA > nameB) {
//         return -1
//     }
//     return 0
// })))

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// const users = [
//          {name: 'vasya', age: 31, isMarried: false},
//          {name: 'petya', age: 30, isMarried: true},
//          {name: 'kolya', age: 29, isMarried: true},
//          {name: 'olya', age: 28, isMarried: false},
//          {name: 'max', age: 30, isMarried: true},
//          {name: 'anya', age: 31, isMarried: false},
//          {name: 'oleg', age: 28, isMarried: false},
//          {name: 'andrey', age: 29, isMarried: true},
//          {name: 'masha', age: 30, isMarried: true},
//          {name: 'olya', age: 31, isMarried: false},
//          {name: 'max', age: 31, isMarried: true}
//     ]
//
// console.log(users.map((x, i) =>({...x, id : i+2}) ))
//
//
// d) відсортувати його за індентифікатором
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ]
//
// const newUsers = users.map((x, i) => {
//     const {name, age, isMarried} = x
//     return {name, age, isMarried, id : i + 1}
// })
// //
// // console.log(newUsers.sort((a, b) => a.id - b.id));
//
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
]
const newUsers = users.map((x, i) => {
    const {name, age, isMarried} = x
    return {name, age, isMarried, id : i + 1}
})
//
// console.log(newUsers.sort((a, b) => a.id - b.id));

const usersClone = newUsers.reduce((acc, user) =>
    user.isMarried ? [...acc, {...user, takesFlat : true}] : acc, []);
console.log(usersClone)




