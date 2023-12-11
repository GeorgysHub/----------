// Этап 1: Минификация кода
function minifyCode(inputCode) {
    // (удаление пробелов, переводов строк, комментариев)
    let minifiedCode = inputCode.replace(/\s+/g, '').replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    return minifiedCode;
}

// Этап 2: Изменение структуры кода
function rearrangeCode(inputCode) {
    const lines = inputCode.split('\n');
    const shuffledLines = shuffleArray(lines);
    const rearrangedCode = shuffledLines.join('\n');
    return rearrangedCode;
}

// Этап 3: Шифрование строк
function encryptStrings(inputCode) {
    // замена символов на их шестнадцатеричное представление
    const encodedCode = encodeURIComponent(inputCode);
    return encodedCode;
}

// Этап 4: Использование выражений-заглушек
function insertDummyExpressions(inputCode) {
    // Вставка фиктивных выражений и функций
    const codeWithDummyExpressions = inputCode.replace(/console\.log/g, 'dummyFunction');
    return codeWithDummyExpressions;
}

// Функция для перемешивания массива случайным образом
function shuffleArray(array) {
    const shuffledArray = array.slice(); // Создаем копию массива
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function obfuscateCode(inputCode) {
    let obfuscatedCode = inputCode;

    obfuscatedCode = minifyCode(obfuscatedCode);
    obfuscatedCode = rearrangeCode(obfuscatedCode);
    obfuscatedCode = encryptStrings(obfuscatedCode);
    obfuscatedCode = insertDummyExpressions(obfuscatedCode);

    return obfuscatedCode;
}

// Вызываем функцию обфускации на вашем исходном коде
const originalCode = `
    function helloWorld() {
        console.log('Hello, world!');
    }

    helloWorld();
`;

const obfuscatedCode = obfuscateCode(originalCode);

console.log('Обфусцированный код:');
console.log(obfuscatedCode);

// Выполнение обфусцированного кода /// вот мой код 

