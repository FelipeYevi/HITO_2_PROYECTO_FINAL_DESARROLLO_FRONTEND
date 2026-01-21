import React from "react";
import { Link, NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <aside
      className="col-12 col-md-3 col-lg-2 bg-light border-end p-4 shadow-sm"
      style={{ minHeight: "100vh" }}
    >
      <div className="sticky-top" style={{ top: "20px" }}>
        {/* TÍTULO */}
        <h5 className="fw-bold text-center mb-4 border-bottom pb-2">
          PANEL ADMINISTRADOR
        </h5>

        {/* MENÚ PRINCIPAL */}
        <nav className="d-flex flex-column gap-2">
          <NavLink
            to="/admin/agregar"
            className="btn btn-outline-dark text-center fw-semibold"
          >
            ➕ Agregar Producto
          </NavLink>

          <NavLink
            to="/admin/pedidos"
            className="btn btn-outline-dark text-center fw-semibold"
          >
            🧾 Pedidos
          </NavLink>

          <NavLink
            to="/admin/usuarios"
            className="btn btn-outline-dark text-center fw-semibold"
          >
            👥 Usuarios
          </NavLink>
        </nav>


        <hr className="my-4" />
      </div>
    </aside>
  );
};

export default SidebarAdmin;
