import healthStatus from '../healthStatus';

test('healthStatus undefined', () => {
  expect(healthStatus({ name: 'Маг' })).toBe(null);
});

test('healthStatus 100', () => {
  expect(healthStatus({ name: 'Маг', health: 100 })).toBe('healthy');
});

test('healthStatus 51', () => {
  expect(healthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
});

test('healthStatus 50', () => {
  expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('healthStatus 33', () => {
  expect(healthStatus({ name: 'Маг', health: 33 })).toBe('wounded');
});

test('healthStatus 15', () => {
  expect(healthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('healthStatus 14', () => {
  expect(healthStatus({ name: 'Маг', health: 14 })).toBe('critical');
});

test('healthStatus 0', () => {
  expect(healthStatus({ name: 'Маг', health: 0 })).toBe('critical');
});
