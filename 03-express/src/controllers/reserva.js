const Reserva = require("../models/Reserva");

const reservaController = {
  index: async (req, res) => {
    const allReserva = await Reseva.findAll();
    res.json(allReserva);
  },

  store: async (req, res) => {
    const { data_reserva, data_limite_devolucao, total, cliente_codigo } =
      req.body;

    const novaReserva = await Reserva.create({
      data_reserva,
      data_limite_devolucao,
      total,
      cliente_codigo,
    });

    res.json(novaReserva);
  },

  show: async (req, res) => {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      res.status(404).json({
        message: "Reserva não encontrado",
      });
    } else {
      res.json(reserva);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { data_reserva, data_limite_devolucao, total, cliente_codigo } =
      req.body;

    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      res.status(404).json({
        message: "Cliente não encontrado",
      });
    }
    await Reserva.update(
      { data_reserva, data_limite_devolucao, total, cliente_codigo },
      { where: { codigo: id } }
    );

    const reservaAtualizada = await Reserva.findByPk(id);
    res.json(reservaAtualizada);
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      res.status(204).json({ message: "Reserva não encontrado" });
    } else {
      await reserva.destroy();
    }

    res.status(204).send("");
  },
};

module.exports = reservaController;
