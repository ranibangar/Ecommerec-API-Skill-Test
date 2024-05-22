import { Product } from "./product.schema.js";

export default class productController {
  async createProduct(req, res) {
    try {
      const { name, quantity } = req.body;
      const product = new Product({ name, quantity });
      await product.save();
      res.status(201).json({ data: { product } });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  };

  // List all products

  async listProducts(req,res){
    try{
      const products = await Product.find();
      res.status(200).json({data: {products}});
    }catch (error) {
        res.status(500).json({ error: "Something went wrong" });
  }
};

// Delete a product
async deleteProduct(req,res){
    try{
         const { id } =req.params;
         await Product.findByIdAndDelete(id);
         res.status(200).json({ data: { message: 'Product deleted Successfully' } });
    }catch (error) {
        res.status(500).json({ error: "Something went wrong" });
  }
}

// Update product quantity
async updateProductQuantity(req,res){
  try{
    const{id}= req.params;
    const{number}=req.query;
    const product =await Product.findById(id);
    product.quantity+=parseInt(number);
    await product.save();
    res.status(200).json({ data: { product }, message: 'Quantity Updated successfully' });
  }catch (error) {
    res.status(500).json({ error: "Something went wrong" });
}
}




}