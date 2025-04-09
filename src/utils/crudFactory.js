const createCRUDController = (repo) => ({
  create: async (req, res) => {
    try {
      const item = await repo.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const items = await repo.getAll();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const item = await repo.getById(req.params.id);
      if (!item) return res.status(404).json({ error: "Not found" });
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const item = await repo.update(req.params.id, req.body);
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  remove: async (req, res) => {
    try {
      await repo.remove(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
});

module.exports = createCRUDController;
