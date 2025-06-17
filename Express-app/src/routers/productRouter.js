import express from 'express'
import { productGet, productList ,productUpload,productTest} from '../Controller/product.controller.js'

const productRouter=express.Router()
productRouter.get('/:id',productGet)
productRouter.get('/p/list/:id',productList)
productRouter.get('/:name/:id',productUpload)
productRouter.post('/test/p/:id',productTest)
export default productRouter;