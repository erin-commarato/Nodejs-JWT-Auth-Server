const mongoose = require('mongoose');

before((done) => {
  mongoose.connect('mongodb://localhost/auth');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //clear out users before each test
    done();
  })
});
