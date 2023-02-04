

function degFahrenheit(degCels) {
    //let degFahren = 0 ;
    degFahren = degCels * (9 / 5) + 32;
    return degFahren;
}
    
// Формула перевода градусов Цельсия в градусы Фаренгейта:
//         градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

alert("Привет! Посчитаем?");

let celsius = parseFloat(prompt("Введите температуру в градусах по Цельсию (можно некруглое значение): "));
let degFahren = 0;
degFahrenheit(celsius);
alert(`Значение температуры ${celsius} градусов Цельсия соответствует ${Math.floor(degFahren * 100) / 100} градусов Фаренгейта`);
// вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8