const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

// extra rare
const throwError = (message: string): never => {
    throw new Error(message);
};

// destructuring with annotations
const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};

const logWeather = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

// ES2015
// const logWeather = ({ date, weather }) => {
//     console.log(date);
//     console.log(weather);
// };

logWeather(todaysWeather);
