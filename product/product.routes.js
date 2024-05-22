import express from "express";
import productController from "./product.controller.js";

const productCon = new productController();


const productRouter=express.Router();

productRouter.post("/create",(req,res)=>{
    productCon.createProduct(req,res)
})

productRouter.get("/",(req,res)=>{
    productCon.listProducts(req,res)
})

productRouter.delete("/:id",(req,res)=>{
    productCon.deleteProduct(req,res)
})

productRouter.post("/:id/update_quantity",(req,res)=>{
    productCon.updateProductQuantity(req,res)
})

export default productRouter;
