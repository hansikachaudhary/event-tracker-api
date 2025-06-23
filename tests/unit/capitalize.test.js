const capitalize = require('../../utils/capitalize');

test('Capitalizes the first letter of the word', () => {
  expect(capitalize('hansika')).toBe('Hansika');
});

test('Does not change already capitalized word', () => {
  expect(capitalize('Event')).toBe('Event');
});

test('Handles empty string', () => {
  expect(capitalize('')).toBe('');
});
