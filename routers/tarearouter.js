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
  
module.exports = router;