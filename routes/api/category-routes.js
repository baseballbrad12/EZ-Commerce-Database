const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Routing Categories model by All categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Routing Categories model by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      where: {
        id: req.params.id
      },
      include: [Product]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a new category
router.post('/', (req, res) => {
  console.log(req.body)
  Category.create(req.body)
  .then((category) => {
    res.status(200).json(category);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

//Update category by ID
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
  .then (() => {
    res.status(200).json(req.body);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
});

//Delete category by ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Category found with this ID!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
