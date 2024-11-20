import express from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 3000;

const __dirname = path.resolve();

app.use(express.static('public', {
  extensions: ['html'],
}));

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
