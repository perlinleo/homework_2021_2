'use strict';

/**
 * Возвращает строку с заданной высоты ёлкой
 *
 * @param {string|number} - Высота
 * @returns {(string|null)} - Полученная ёлка или null
 */
const tree = (num) => {
    const height = Number(num);
    if (height < 3 || (!Number.isInteger(height)) || isNaN(height)) {
        return null;
    }

    let res = '';

    const maxWidth = height * 2 - 3;

    for (let asteriskAmount = 1; asteriskAmount <= maxWidth; asteriskAmount += 2) {
        res += `${('*'.repeat(asteriskAmount)).padStart((maxWidth+asteriskAmount) / 2, ' ').padEnd(maxWidth)}\n`;
    }
    res += `${'|'.padStart((maxWidth + 1) / 2, ' ').padEnd(maxWidth)}\n`;

    return res;
}