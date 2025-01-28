import { healthStatus } from '../char'


test('should return healthy', () => {
    let result = healthStatus({name: 'test_name', health: 99});
    expect(result).toBe('healthy');
});

test('should return wounded', () => {
    let result = healthStatus({name: 'test_name', health: 50});
    expect(result).toBe('wounded');
});

test('should return critical', () => {
    let result = healthStatus({name: 'test_name', health: 1});
    expect(result).toBe('critical');
});