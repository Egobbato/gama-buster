const Cliente = require("../models/Cliente");

const clienteController = {
  index: async (req, res) => {
    const allCliente = await Cliente.findAll();
    res.json(allCliente);
  },

  store: async (req, res) => {
    const { nome, sobrenome, cpf, data_nascimento, email } = req.body;
    const novoCliente = await Cliente.create({
      nome,
      sobrenome,
      cpf,
      data_nascimento,
      email,
    });

    res.json(novoCliente);
  },

  show: async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (cliente) {
      return res.json(cliente);
    } else {
      res.status(404).json({
        message: "Cliente não encontrado",
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, cpf, data_nascimento, email } = req.body;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      res.status(404).json({
        message: "Cliente não encontrado",
      });
    }
    await Cliente.update(
      { nome, sobrenome, cpf, data_nascimento, email },
      { where: { codigo: id } }
    );

    const clienteAtualizado = await Cliente.findByPk(id);
    res.json(clienteAtualizado);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      res.status(204).json({ message: "Cliente não encontrado" });
    } else {
      await cliente.destroy();
    }

    res.status(204).send("");
  },
};

module.exports = clienteController;
