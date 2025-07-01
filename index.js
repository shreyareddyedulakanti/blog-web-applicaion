import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [{
  id:1,
  title:"Colors of Rajasthan: A Journey Through Desert Majesty",
  content:"From the golden sands of Jaisalmer to the royal palaces of Udaipur, Rajasthan unfolds like a vivid painting. My journey began in Jaipur, the Pink City, where the Hawa Mahal stands like a honeycomb of dreams. I wandered through the City Palace, soaked in the scent of spice-laden markets, and tasted ghewar dripping in syrup.\n\nIn Jodhpur, the Blue City, the mighty Mehrangarh Fort looms over houses painted like the sky. It was here, over a bowl of dal baati churma, that I realized Rajasthan’s true charm lies not just in its forts, but in its people — warm, proud, and endlessly hospitable.\n\nJaisalmer’s sand dunes glowed at sunset. I rode a camel into the horizon, slept in a desert camp under stars so bright they looked unreal. Udaipur, by contrast, was gentle — Lake Pichola shimmered at dawn, and the Lake Palace seemed to float in a dream.\n\nRajasthan is a symphony of color, tradition, and resilience. Every corner tells a story, and every story lingers long after you’ve left."}];

app.get('/', (req, res) => {
  res.render('index.ejs', { posts });
});

// Removed temporarily to implement read more on homepage
// app.get('/blog/:id', (req, res) => {
//   const id = req.params.id;
//   const post = posts.find((post) => post.id === Number(id));
//   if (post !== undefined) {
//     res.render('blog.ejs', { post });
//   } else {
//     res.render('error.ejs');
//   }
// });

app.get('/new', (req, res) => {
  res.render('new-blog.ejs');
});

app.get('/update/:id', (req, res) => {
  const id = req.params.id;
  const post = posts.find((post) => post.id === Number(id));
  if (post !== undefined) {
    res.render('update-blog.ejs', { post });
  } else {
    res.render('error.ejs');
  }
});

app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const postIndex = posts.findIndex((post) => post.id === Number(id));
  if (postIndex === -1) {
    res.render('error.ejs');
  }

  const { title, content } = req.body;
  posts[postIndex] = {
    ...posts[postIndex],
    title: title,
    content: content,
  };

  res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
  let deleteId = req.params.id;
  posts = posts.filter((post) => post.id !== Number(deleteId));

  res.redirect('/');
});

app.post('/submit', (req, res) => {
  const { title, content } = req.body;
  const post = {
    id: posts.length + 1,
    title: title,
    content: content,
  };
  posts.push(post);
  res.redirect('/');
});

// For any undefined URL
app.use((req, res) => {
  res.status(404).render('error.ejs');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
