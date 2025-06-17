import express from 'express';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js'
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api1',userRouter)
app.use('/product',productRouter)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
