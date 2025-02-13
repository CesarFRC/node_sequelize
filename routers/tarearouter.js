const express =  require('express');
const Tarea = require('../models/tarea')

const router = express.Router();

//la creacion de una ruta o endpoint 
router.get('/', async (req,res) =>{
    const tarea = await Tarea.findAll();
    res.json(tarea);
})

router.post('/', async (req, res) => {
    const { titulo, descripcion, completado } = req.body;
  
    try {
      const nuevatarea = await Tarea.create({ titulo, descripcion, completado });
      // Responder con la tarea creada y un mensaje de éxito
      res.status(201).json({
        message: "Tarea creada exitosamente",
        tarea: nuevatarea
      });
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al crear la tarea",
        error: error.message
      });
    }
  });
  
  //ROUTER CON GET
  router.get('/:id', async (req,res) => {
    try{
      const tarea = await Tarea.findByPk(req.params.id);
      if (!tarea){
        return res.status(404).json({error: 'Tarea no encontrada'});

      }
      res.json(tarea);
    }catch (error){
      res.status(500).json({error: 'error al obtener la tarea'})
    }
  });

  // Actualizar una tarea por ID (PUT)
router.put('/:id', async (req, res) => {
  try {
      const tarea = await Tarea.findByPk(req.params.id);
      if (!tarea) {
          return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      await tarea.update(req.body);
      res.json({ mensaje: 'Tarea actualizada', tarea });
  } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
});

// Eliminar una tarea por ID (DELETE)
router.delete('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const tareaEliminada = await Tarea.destroy({ where: { id } });

      if (tareaEliminada) {
          res.json({ message: `✅ Tarea con ID ${id} eliminada` });
      } else {
          res.status(404).json({ error: `❌ No se encontró la tarea con ID ${id}` });
      }
  } catch (error) {
      res.status(500).json({ error: '❌ Error al eliminar la tarea' });
  }
});



module.exports = router;