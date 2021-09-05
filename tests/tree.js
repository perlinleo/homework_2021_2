'use strict';

QUnit.module('Тестируем функцию tree', function() {
    QUnit.test('Ёлочек высотой ниже трёх не бывает', function(assert) {
        assert.strictEqual(tree(0), null);
        assert.strictEqual(tree(1), null);
        assert.strictEqual(tree(2), null);
        assert.strictEqual(tree('0'), null);
        assert.strictEqual(tree('1'), null);
        assert.strictEqual(tree('2'), null);
    });

    QUnit.test('Ёлочка высотой 3', function(assert) {
        const expected =
            ' * \n' +
            '***\n' +
            ' | \n';
        assert.strictEqual(tree(3), expected);
        assert.strictEqual(tree('3'), expected);
    });

    QUnit.test('Ёлочка высотой 4', function(assert) {
        const expected =
            '  *  \n' +
            ' *** \n' +
            '*****\n' +
            '  |  \n';
        assert.strictEqual(tree(4), expected);
        assert.strictEqual(tree('4'), expected);
    });

    QUnit.test('Ёлочка высотой 5', function(assert) {
        const expected =
            '   *   \n' +
            '  ***  \n' +
            ' ***** \n' +
            '*******\n' +
            '   |   \n';
        assert.strictEqual(tree(5), expected);
        assert.strictEqual(tree('5'), expected);
    });

    QUnit.test('Ёлочка высотой 8', function(assert) {
        const expected =
            '      *      \n' +
            '     ***     \n' +
            '    *****    \n' +
            '   *******   \n' +
            '  *********  \n' +
            ' *********** \n' +
            '*************\n' +
            '      |      \n';
        assert.strictEqual(tree(8), expected);
        assert.strictEqual(tree('8'), expected);
    });
    QUnit.test('Ёлочек c отрицательной высотой не бывает', function(assert) {
        assert.strictEqual(tree(-1), null);
        assert.strictEqual(tree(-100), null);
        assert.strictEqual(tree('-1'), null);
        assert.strictEqual(tree('-100'), null);
    });
    QUnit.test('Неправильные входные данные', function(assert) {
        assert.strictEqual(tree(null), null);
        assert.strictEqual(tree('(^=◕ᴥ◕=^)'), null);
        assert.strictEqual(tree(tree), null);
    });
    QUnit.test('Дробное входное число', function(assert) {
        assert.strictEqual(tree(1.37), null);
        assert.strictEqual(tree(-1.4), null);
    });
});