import React from "react";
import "../Css/Profile.css";

const Profile = () => {
  return (
    <div className="container my-5">

      {/* perfil*/}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body d-flex align-items-center gap-4">
          <div className="profile-avatar">
            <span>FY</span>
          </div>

          <div>
            <h4 className="fw-bold mb-1">Felipe Yevilao</h4>
            <p className="text-muted mb-0">felipe@email.com</p>
            <span className="badge bg-success mt-2">Cliente activo</span>
          </div>
        </div>
      </div>

      {/* estadisticas */}
      <div className="row g-4 mb-4">
        <div className="col-6 col-md-3">
          <div className="card stat-card text-center">
            <h3>5</h3>
            <p>Pedidos</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card stat-card text-center">
            <h3>3</h3>
            <p>En carrito</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card stat-card text-center">
            <h3>Pesca con mosca</h3>
            <p>Categoría favorita</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card stat-card text-center">
            <h3>2 días</h3>
            <p>Última visita</p>
          </div>
        </div>
      </div>

      {/* info personal */}
      <div className="row g-4 mb-4">

        {/* Preferencias */}
        <div className="col-md-6">
          <div className="card info-card">
            <h5 className="fw-bold mb-3">Preferencias</h5>
            <ul className="list-unstyled">
              <li>🎣 Tipo de pesca a practicar: Pesca con mosca</li>
            </ul>
          </div>
        </div>

     {/* Direccion envio*/}
        <div className="col-md-6">
          <div className="card info-card">

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0">Dirección de envío</h5>
              <button
                className="btn btn-outline-primary btn-sm"
                type="button"
              >
                Editar
              </button>
            </div>

            <ul className="list-unstyled mb-0">
              <li>📍 Región: Metropolitana</li>
              <li>🏠 Ciudad: Santiago</li>
              <li>🚚 Dirección principal</li>
            </ul>
          </div>
        </div>

      </div>


      <div className="card info-card">
        <h5 className="fw-bold mb-3">Seguridad</h5>
        <p className="mb-2">Último inicio de sesión: hace 2 días</p>
      </div>

    </div>
  );
};

export default Profile;
