const assert = require('assert');
const User = require('../models/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    const user = new User({ email: 'test@test.com', password: '123'});

    user.save()
      .then(() => {
        assert(!user.isNew);
        done();
      });
  });
});
