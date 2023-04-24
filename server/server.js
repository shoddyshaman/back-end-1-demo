//imports and packages needed to create/run the server
const express = require("express");
const cors = require("cors");

//initializing express
const app = express();

//middleware to help execute endpoints
app.use(express.json());
app.use(cors());

//dummy-data/fake database
const inventory = [
  "greeting card",
  "table",
  "chair",
  "milk",
  "boat",
  "cookies",
  "cheese",
  "shampoo",
  "conditioner",
  "face wash",
];

// endpoints: url & handler-function with a request(req) and a response object(res)
app.get("/api/inventory", (req, res) => {
  console.log(req.query.item);
  if (req.query.item) {
    const filteredItems = inventory.filter((invItem) =>
      invItem.toLowerCase().includes(req.query.item.toLowerCase())
    );
    res.status(200).send(filteredItems)
  } else {
    res.status(200).send(inventory);
  }
});

//get endpoint with a param
app.get("/api/inventory/:id", (req, res) => {
  // console.log(req.params.id)
  const { id } = req.params;
  res.status(200).send(inventory[id]);
});

//runs the server for us on port 5050
app.listen(5050, () => console.log(`jammin on 5050`));
