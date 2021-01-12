const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Route Tags model by all Tags
router.get('/', (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route Tags Model by ID
router.get('/:id', (req, res) => {
  try {
    const tagData = await Tag.findAll({
      where: {
        id: req.params.id
      },
      include: [Product]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag) => {
    res.status(200).json(tag);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

//Update Tag name by ID
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then (() => {
    res.status(200).json(req.body);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

//Delete Tag by ID
router.delete('/:id', (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!tagData)
    {
      res.status(404).json({ message : "No Tag found with this ID!"});
      return;
    }

    res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
