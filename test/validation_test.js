const assert = require('assert');
const User = require('../models/user');

describe('Validating records', () => {
  it('requires an email address', () => {
    const user = new User({ email: undefined, password: 'abc' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.email;
    assert (message === 'Email is required.');
  });

  it('requires an email address longer than 5 characters', () => {
    const user = new User({ email: 'a@b.c', password: 'abc' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.email;
    assert (message === 'Email must be longer than 5 characters.');
  });
});
