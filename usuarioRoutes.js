import {Router} from 'express';
import UsuarioService from '../services/usuarioService.js';

const router=Router();
const UService=new UsuarioService();

router.get('/', async(req,res)=> {
    const usuarios=await UService.getAll();
    
    return res.status(200).json(usuarios);
});

router.get('/:id', async (req,res)=> {
   const id=req.params.id;
    const usuarios = await UService.getById(id);
    return res.status(200).json(usuarios);
});

router.post('/',async(req,res) => {
  
    console.log(req.body);
    const {nombre, apellido, usuario, contrasenia, fechaNacimiento, mail, diabetesActual, fkContactoEmergencia,fkTipoDiabetes,fkRol,fkTipoSangre,fkObraSocial,fkMedico} = req.body
    
    const usuarios = await UService.insert(nombre, apellido, usuario, contrasenia, fechaNacimiento, mail, diabetesActual, fkContactoEmergencia,fkTipoDiabetes,fkRol,fkTipoSangre,fkObraSocial,fkMedico);
    return res.status(200).json(usuarios);

    
   

});

router.put('/:id',async(req,res) => {
    const id =req.params.id;
    const body=req.body;
    const usuarios= await UService.update(body);
    return res.status(200).json(usuarios);
});

router.delete("/:id",async (req,res)=>{
    const id=req.params.id;
    const usuarios=await UService.deleteById(id)
    return res.status(200).json(usuarios);

});

export default router;