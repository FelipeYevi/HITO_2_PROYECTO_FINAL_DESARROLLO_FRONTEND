import React from "react";

const CardAdmin = ({ id, name, img, detail, onEliminar, onEditar }) => {
  return (
    <div className="col-6 mb-4">
      <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img
              src={img}
              className="img-fluid h-100 w-100 object-fit-center"
              alt={name}
              style={{ minHeight: "250px", maxHeight: "300px" }}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body d-flex flex-column p-4">
              <h4 className="card-title fw-bold text-uppercase mb-3">{name}</h4>

              <div className="bg-light p-3 rounded-3 mb-3 border">
                <h6 className="fw-bold text-muted mb-2">Detalles Generales:</h6>
                <div className="d-flex flex-wrap gap-1">
                  {detail &&
                    detail.map((item, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary-subtle text-dark p-2 text-wrap text-start w-100"
                      >
                        {item}
                      </span>
                    ))}
                </div>
              </div>

              <div className="mt-auto pt-3 border-top">
                <div className="d-flex justify-content-end gap-2">
                  <button
                    className="btn btn-outline-info px-4 fw-bold"
                    onClick={() => onEditar({ id, name, img, detail })}
                  >
                    MODIFICAR PRODUCTO
                  </button>
                  <button
                    className="btn btn-danger text-white px-4 fw-bold"
                    onClick={() => onEliminar(id)}
                  >
                    ELIMINAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAdmin;
