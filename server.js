const express = require('express');

const app = express();

const PORT = process.env.PORT || '3003';

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('Public'));

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
