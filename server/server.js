const express = require(`express`);

// use local path variable for port, otherwise use port 3000
const port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
  res.status(200).send('yo kids')
});

app.get('/hello', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'To Do App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Joe Grotto',
    age: 26
  }, {
    name: 'Ryan Sobbe',
    age: 27
  }, {
    name: 'Scott Grotto',
    age: 28
  }, {
    name: 'Greg Berg',
    age: 26
  }]);
});

app.listen(port, () => {
  console.log(`Application Launched on port:${port}`);
});

module.exports.app = app;
