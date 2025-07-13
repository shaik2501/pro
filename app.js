const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', { videoUrl: null, error: null });
});

app.post('/generate', (req, res) => {
  const { text1, text2, text3, text4 } = req.body;

  const baseUrl = 'https://yourvideohost.com/api/video';
  const videoUrl = `${baseUrl}?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}&text4=${encodeURIComponent(text4)}`;

  res.render('index', { videoUrl, error: null });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
