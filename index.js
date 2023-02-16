const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

var corsOptions = {
  origin: '*'
}
var count;

//allow all requests
//app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//api endpoint /api with query parameters of url and search, returns the number of times that 'search' appears in the webpage of 'url'
app.get("/api", cors(), async (req, res) => {
  try{
    await getPageData(req.query.url, req.query.search);
    res.json({date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(), search: req.query.search, url: req.query.url, count: this.count});
  }
  catch (e) {
    console.log("error processing request");
    res.json({count: -1});
  }
});

const getPageData = async (url, search) => {
  //obtain page body
  const response = await fetch(url, { method:'GET', headers: { 'Content-Type':'any' }});
	const body = await response.text();
	console.log(body);

  //count body by number of times something exactly matches the search term
  var regex = new RegExp(search, 'g');
  this.count = (body.match(regex) || []).length;
  console.log("count:" + this.count);
	return this.count;
};