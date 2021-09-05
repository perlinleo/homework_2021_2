'use strict';

const leafSymbol = '*';
const outerSymbol = ' ';
const foundationSymbol = '|';
const layerEnd = '\n';
const minHeight = 3;


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
    const sideLength = height - 2;
    const result = Array.from(Array(height - 1).keys());

    const newResult = result.map(x => {
        const right = leafSymbol.repeat(x).padEnd(sideLength, outerSymbol);
        const left = right.split('').reverse('').join('');
        const layer = `${left}${leafSymbol}${right}`;
        return layer;
    })

    const lastLineSpaces = outerSymbol.repeat(sideLength);
    newResult.push(`${lastLineSpaces}${foundationSymbol}${lastLineSpaces}${layerEnd}`);

    return newResult.join(layerEnd);
}