import { healthStatus } from '../char'


describe('heath status function', () => {
    test.each([
        [{name: 'test_name', health: 99}, 'healthy'],
        [{name: 'test_name', health: 50}, 'wounded'],
        [{name: 'test_name', health: 1}, 'critical']
    ])('should return health status string', (charObj, expectedStr) => {
        expect(healthStatus(charObj)).toBe(expectedStr);
    });
});