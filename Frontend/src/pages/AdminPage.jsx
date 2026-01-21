import React, { useState, useEffect } from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import Header from "../components/Header";
import CardAdmin from "../components/CardAdmin";

const AdminPage = () => {
  const [productos, setProductos] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  // Cargar productos
  useEffect(() => {
    fetch("http://localhost:5000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setProductosOriginales(data);
      });
  }, []);

  // FILTRO POR CATEGORÍA
  const handleFiltrarCategoria = (e) => {
    const categoria = e.target.value;

    if (categoria === "ALL") {
      setProductos(productosOriginales);
      return;
    }

    const filtrados = productosOriginales.filter(
      (p) => p.categoria === categoria,
    );

    setProductos(filtrados);
  };

  // EDITAR
  const abrirModalEditar = (producto) => {
    setProductoAEditar(producto);
  };

  const guardarCambios = (e) => {
    e.preventDefault();

    setProductos(
      productos.map((p) => (p.id === productoAEditar.id ? productoAEditar : p)),
    );

    setProductosOriginales(
      productosOriginales.map((p) =>
        p.id === productoAEditar.id ? productoAEditar : p,
      ),
    );

    setProductoAEditar(null);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <SidebarAdmin />

        <main className="col-12 col-md-9 col-lg-10">
          <Header />

          <div className="container p-4">
            <h2 className="text-center mb-5 fw-bold text-uppercase">
              Gestión de Productos
            </h2>

            {/* FILTRO */}
            <div className="d-flex flex-column align-items-center mb-5">
              <h6 className="fw-bold mb-3">FILTRAR POR CATEGORÍA</h6>

              <select
                className="form-select text-center w-50 shadow-sm"
                style={{ textAlignLast: "center" }}
                defaultValue="ALL"
                onChange={handleFiltrarCategoria}
              >
                <option value="ALL">TODAS LAS CATEGORÍAS</option>
                <option value="Sale">OFERTAS</option>
                <option value="Tradicional">PESCA TRADICIONAL</option>
                <option value="PescaMosca">PESCA CON MOSCA</option>
              </select>
            </div>

            {/* LISTADO */}
            <div className="row">
              {productos.map((p) => (
                <CardAdmin
                  key={p.id}
                  {...p}
                  onEliminar={() => setProductoAEliminar(p)}
                  onEditar={() => abrirModalEditar(p)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* modal eliminar */}
      {productoAEliminar && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1060 }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 border-0">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title fw-bold">ELIMINAR PRODUCTO</h5>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setProductoAEliminar(null)}
                />
              </div>
              <div className="modal-body text-center p-4">
                <p className="fs-5">¿Estás seguro de eliminar este producto?</p>
                <p className="fw-bold">{productoAEliminar.name}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-secondary"
                  onClick={() => setProductoAEliminar(null)}
                >
                  CANCELAR
                </button>
                <button
                  className="btn btn-danger fw-bold"
                  onClick={() => handleEliminar(productoAEliminar.id)}
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* modal editar */}
      {productoAEditar && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-4 border-0">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title fw-bold">MODIFICAR PRODUCTO</h5>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setProductoAEditar(null)}
                />
              </div>

              <form onSubmit={guardarCambios}>
                <div className="modal-body p-4">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img
                        src={productoAEditar.img}
                        alt="preview"
                        className="img-fluid rounded border mb-2"
                        style={{ maxHeight: "150px" }}
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="mb-3">
                        <label className="fw-bold small">NOMBRE</label>
                        <input
                          className="form-control"
                          value={productoAEditar.name}
                          onChange={(e) =>
                            setProductoAEditar({
                              ...productoAEditar,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="mb-3">
                        <label className="fw-bold small">IMAGEN URL</label>
                        <input
                          className="form-control"
                          value={productoAEditar.img}
                          onChange={(e) =>
                            setProductoAEditar({
                              ...productoAEditar,
                              img: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold small">DETALLES</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={productoAEditar.detail.join(", ")}
                      onChange={(e) =>
                        setProductoAEditar({
                          ...productoAEditar,
                          detail: e.target.value.split(", "),
                        })
                      }
                    />
                  </div>
                </div>

                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setProductoAEditar(null)}
                  >
                    CANCELAR
                  </button>
                  <button
                    type="submit"
                    className="btn btn-info text-white fw-bold"
                  >
                    GUARDAR CAMBIOS
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
