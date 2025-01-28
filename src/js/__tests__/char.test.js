import { healthStatus } from '../char'


let healthTestValues = [99, 50, 1];
    let expectedStrings = ['healthy', 'wounded', 'critical']


for (let i = 0; i < 3; ++i) {
    test('health status test', () => {
        let result = healthStatus({name: 'test_name', health: healthTestValues[i]});
        expect(result).toBe(expectedStrings[i]);
    });
}
