const express = require("express");
const router = express.Router();

// const posts = [
//   {
//     title: "post 1",
//     content: "dolce 1",
//     img: "./images/1.jpeg",
//     tags: ["dolci", "frutta", "zucccheri"],
//   },
//   {
//     title: "post 2",
//     content: "dolce 2",
//     img: "./images/2.jpeg",
//     tags: ["dolci", "frutta", "zucccheri"],
//   },
//   {
//     title: "post 3",
//     content: "dolce 3",
//     img: "./images/3.jpeg",
//     tags: ["dolci", "frutta", "zucccheri"],
//   },
//   {
//     title: "post 4",
//     content: "dolce 4",
//     img: "./images/4.jpeg",
//     tags: ["dolci", "frutta", "zucccheri"],
//   },
//   {
//     title: "post 5",
//     content: "dolce 5",
//     img: "./images/5.jpeg",
//     tags: ["dolci", "frutta", "zucccheri"],
//   },
// ];

//# INDEX
router.get("/", (req, res) => {
  res.json("Lista dei post");
});
//# SHOW
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Lista del dettaglio del post " + id);
});
//# STORE
router.post("/", (req, res) => {
  res.json("Creazione di un nuovo post");
});
//# UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Sostituzione del post " + id);
});
//# MODIFY
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Modifica del post " + id);
});
//# DESTROY
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Eliminazione del post " + id);
});

module.exports = router;
