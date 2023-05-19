// Функция для вычисления факториала
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// Функция для возведения числа в степень
function power(num, power) {
    return Math.pow(num, power);
}
// Функция, которая вычисляет значение функции на заданном интервале
function integrate(f, a, b) {
    let dx = (b - a) / 1000; // Шаг интегрирования
    let integral = 0;
    for (let i = a; i <= b; i += dx) {
        integral += f(i) * dx;
    }
    return integral;
}
// Основная функция, которая вызывает все остальные функции
function main() {
    // Вычисление факториалов до 200
    for (let n = 1; n <= 200; n++) {
        console.log(`Факториал ${n} равен ${factorial(n)}`);
    }
    // Возведение числа в степени до 10
    console.log("Возведение чисел в степени до 10");
    for (let num = 1, power = 10; power >= 1; power--) {
        let powerStr = power + "";
        let int = integrate(function (x) {
            return powerStr.includes(x.toString()) ? 1 : 0; // Функция, равная 1 при x = powerStr
        }, num, num + 1); // Интервал интегрирования от num до num + 1
        console.log(`${num} в степени ${powerStr} равно ${int}`);
        num += 1; // Увеличение номера числа
    }
}
main();