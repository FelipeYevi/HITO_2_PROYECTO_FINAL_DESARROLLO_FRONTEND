import { productoModel } from "../models/producto.model.js";

const readProductos = async (req, res) => {
  const productos = await productoModel.getProductos();
  res.json(productos);
};

const readProducto = async (req, res) => {
  const { id } = req.params;
  const producto = await productoModel.getProducto(id.toLowerCase());
  if (!producto) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.json(producto);
};

export const productoController = {
  readProductos,
  readProducto,
};
