import express from 'express';
import cors from 'cors';
import {} from 'dotenv/config.js'
import { RouterList } from './Router/RouterPage.js';
import { dbConnection } from './db.js';
import { ProductRoute } from './Router/ProductRouter.js';
import { isAuth } from './Helper/isAuth.js';
import { RentalProductRoute } from './Router/RentalRouter.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 9080;
app.use(express.json());

await dbConnection();

app.use('/',RouterList);
app.use('/rental',isAuth,ProductRoute);
app.use('/admin',isAuth,RentalProductRoute);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
