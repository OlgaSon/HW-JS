const circle = {
    radius: 10,
    color: "blue",
    calculateCircumference() {
        let result = 2 * Math.PI * circle['radius'];
        return result
    },
};

console.log(`Circumference: ` + circle.calculateCircumference())


/* Задание 3.
Создать объект circle со свойствами radius, color. 
Также создать в объекте метод calculateCircumference(), 
при вызове которого в консоль выводится длина окружности. */