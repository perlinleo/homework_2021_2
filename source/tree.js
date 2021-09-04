'use strict';

const leafSymbol = '*';
const outerSymbol = ' ';
const foundationSymbol = '|';
const layerEnd = '\n';
const minHeight = 3;


/**
 * Оборачивает строку в пробелы до необходимой длины
 * 
 * @param {String} string - Изначальная строка  
 * @param {Number} toWidth - Желаемая длина получаемой строки
 * @returns {String} - Строка, обернутая пробелами
 */
const padSpaces = (string, toWidth) => {
    if (toWidth < string.length) {
        return null;
    }
    const spacesAmount = (toWidth - string.length) / 2;
    const spaces = outerSymbol.repeat(spacesAmount);
    return `${spaces}${string}${spaces}`;
}

/**
 * Возвращает строку с заданной высоты ёлкой
 *
 * @param {string|number} num - Высота
 * @returns {(string|null)} - Полученная ёлка или null
 */
const tree = (num) => {
    const height = Number(num);
    if (height < minHeight || !Number.isInteger(height) || isNaN(height)) {
        return null;
    }

    const result = [];

    const maxWidth = height * 2 - 3;

    for (let leavesAmount = 1; leavesAmount <= maxWidth; leavesAmount += 2) {
        const core = leafSymbol.repeat(leavesAmount);
        result.push(padSpaces(core, maxWidth));
    }
    result.push(`${padSpaces(foundationSymbol, maxWidth)}${layerEnd}`);

    return result.join('\n');
}