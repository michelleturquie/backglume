import 'dotenv/config';

import pkg from 'pg';

//setteo env
const { Pool } = pkg;

const pool = new Pool(
    {
        
        connectionString: process.env.DB_SERVER,
        ssl: {
            rejectUnauthorized: false
        }
    })

// const config = {

//    user    :   process.env.DB_USER,
//    password:   process.env.DB_PASSWORD,
//     server  :   process.env.DB_SERVER,
//    database:   process.env.DB_DATABASE,
//     options :{
//         trustServerCertificate  :true,
//         trustedConnection       :true
//     }
 
// }
export default pool;   