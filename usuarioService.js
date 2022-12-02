import pool from "../dbconfig.js";


class UsuarioService {

    getAll = async () => {
        try {
            await pool.connect();
            const result = await pool
                .query("SELECT * FROM paciente");
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    }

    deleteById = async (id) => {
        console.log(id)
        try {
            
           await pool.connect();
            let result = await pool
                
                .query(`DELETE FROM paciente WHERE "idPaciente"='${id}'`);
            return result.rows;

        } catch (error) {
            console.log(error);
        }
       
        
    }

    getById = async (id) => {
        console.log(id)
        try {
            await pool.connect();
            const result = await pool
                .query(`SELECT * FROM paciente WHERE "idPaciente"='${id}'`);
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    }
     

    insert = async (nombre, apellido, usuario, contrasenia, fechaNacimiento, mail, diabetesActual,contactoE,tipoD,rol,tipoS,obra,medico) => {
        console.log(contactoE)
        try {
            await pool.connect();
            const result = await pool
            .query(`INSERT INTO paciente (nombre,apellido,usuario,contrasenia,"fechaNacimiento",mail,"diabetesActual","fkContactoEmergencia","fkTipoDiabetes","fkRol","fkTipoSangre","fkObraSocial","fkMedico")
                    VALUES ('${nombre}', '${apellido}', '${usuario}', '${contrasenia}', '${fechaNacimiento}', '${mail}','${diabetesActual}',${contactoE},${tipoD},${rol},${tipoS}, ${obra}, ${medico})`);
                    return result.rowCount        
        }
        catch (err) {
            
            console.log(err)
            throw err 
        }
}



    // deleteById = async (id) => {
    //     let rowsAffected = 0;
    //     try {
    //         console.log(id)
    //         let pool = await sql.connect(config);
    //         let result = await pool.request()
    //             .input('pId', sql.Int, id)
    //             .query('DELETE FROM paciente WHERE Id = @pId');
    //         rowsAffected = result.rowsAffected;

    //     } catch (error) {
    //         console.log(error);
    //     }
    //     return rowsAffected;
        
    // }

    // update = async (usuario) => {
        
        
    //     try {
    //         let pool = await sql.connect(config);


    //         let result = await pool.request()
    //             .input("pNombre", sql.VarChar, usuario.nombre)
    //             .input("pApellido", sql.VarChar, usuario.apellido)
    //             .input("pNusuario", sql.VarChar, usuario.Nusuario)
    //             // ver contraseña
    //             .input("pContra", sql.VarChar, usuario.contra)
    //             .input("pMail", sql.VarChar, usuario.mail)
    //             .input("pDiabetesActual", sql.Float, usuario.diabetesActual)
    //             .input("pPeso", sql.Int, usuario.peso)
    //             .input("pAltura", sql.Float, usuario.altura)
    //             .input("pNacimiento", sql.Date, usuario.fechaNacimiento)
    //             .input("pContactoE", sql.Int, usuario.contactoE)
    //             .input("pTipoDiabetes", sql.Int, usuario.tipoDiabetes)
    //             .input("pRol", sql.Int, usuario.rol)
    //             .input("pSangre", sql.Int, usuario.sangre)
    //             .input("pOsocial", sql.Int, usuario.oSocial)
    //             .input("pMedico", sql.Int, usuario.medico)

    //             .query("INSERT INTO paciente (nombre,apellido,usuario,password,fechaNacimiento,mail,diabetesActual,peso,altura,fkContactoEmergencia,fkTipoDiabetes,fkRol,fkTipoSangre,fkObraSocial,fkMedico) VALUES (@pNombre,@pApellido,@pNusuario,@pContra,@pNacimiento,@pMail,@pDiabetesActual,@pPeso,@pAltura,@pContactoE,@pTipoDiabetes,@pRol,@pSangre,@pOsocial,@pMedico)")
                
                
    //         rowsAffected = result.rowsAffected;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    
        // insert = async (usuario) => {
        //     try{
        //         await pool.connect();
        //         const result = await pool
    
    
    
        //         const text = 'INSERT INTO users(nombre, apellido) VALUES($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12)'
        //         const values = [usuario.nombre, usuario.apellido,usuario.Nusuario,usuario.contra,usuario.mail,usuario.diabetesActual,usuario.peso,usuario.altura,usuario.fechaNacimiento,usuario.contactoE,usuario.tipoDiabetes,usuario.rol,usuario.sangre,usuario.oSocial,usuario.medico]
    
        //         // .input("pNombre", sql.VarChar, usuario.nombre)
        //         // .input("pApellido", sql.VarChar, usuario.apellido)
        //         // .input("pNusuario", sql.VarChar, usuario.Nusuario)
        //         // // ver contraseña
        //         // .input("pContra", sql.VarChar, usuario.contra)
        //         // .input("pMail", sql.VarChar, usuario.mail)
        //         // .input("pDiabetesActual", sql.Float, usuario.diabetesActual)
        //         // .input("pPeso", sql.Int, usuario.peso)
        //         // .input("pAltura", sql.Float, usuario.altura)
        //         // .input("pNacimiento", sql.Date, usuario.fechaNacimiento)
        //         // .input("pContactoE", sql.Int, usuario.contactoE)
        //         // .input("pTipoDiabetes", sql.Int, usuario.tipoDiabetes)
        //         // .input("pRol", sql.Int, usuario.rol)
        //         // .input("pSangre", sql.Int, usuario.sangre)
        //         // .input("pOsocial", sql.Int, usuario.oSocial)
        //         // .input("pMedico", sql.Int, usuario.medico)
    
        //         .query(`INSERT INTO paciente (nombre,apellido,usuario,contrasenia,fechaNacimiento,mail,diabetesActual,peso,altura,fkContactoEmergencia,fkTipoDiabetes,fkRol,fkTipoSangre,fkObraSocial,fkMedico) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`)
        //     }catch(error){
        //         console.log(error);
        //     }
        // }
}
export default UsuarioService;