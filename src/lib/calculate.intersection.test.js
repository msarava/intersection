const calculateIntersection = require('./calculate.intersection');

calculateIntersection;
test('calculateIntersection', () => {
  expect(typeof calculateIntersection).toBe('function');
  expect(calculateIntersection.length).toBe(2);
  expect(calculateIntersection()).toBe(null);
  expect(
    calculateIntersection(
      { start: '10:00', end: '14:00' },
      { start: '11:00', end: '15:00' }
    )
  ).toEqual({ start: '11:00', end: '14:00' });
  expect(
    calculateIntersection(
      { start: '11:00', end: '15:00' },
      { start: '10:00', end: '14:00' }
    )
  ).toEqual({ start: '11:00', end: '14:00' });
  expect(
    calculateIntersection(
      { start: '11:00', end: '15:00' },
      { start: '10:35', end: '14:10' }
    )
  ).toEqual({ start: '11:00', end: '14:10' });
  expect(
    calculateIntersection(
      { start: '10:00', end: '14:00' },
      { start: '14:00', end: '15:00' }
    )
  ).toEqual('No intersection');
  expect(
    calculateIntersection(
      { start: '14:00', end: '15:00' },
      { start: '10:00', end: '12:00' }
    )
  ).toEqual('No intersection');
});
