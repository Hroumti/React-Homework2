import React, { useContext } from 'react';
import { EmployeContext } from './context';
import { useNavigate } from 'react-router-dom';

const ListEmp = () => {
  const { state, dispatch } = useContext(EmployeContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
 
  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleEdit = (emp) => {
    navigate(`/edit/${emp.id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Liste des Employés</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Nom</th>
              <th>Salaire</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.employes.length === 0 ? (
              <tr>
                <td colSpan="4">Aucun employé enregistré</td>
              </tr>
            ) : (
              state.employes.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    {emp.image && (
                      <img
                        src={emp.image}
                        alt={emp.nom}
                        width="60"
                        height="60"
                        style={{objectFit: 'cover'}}
                      />
                    )}
                  </td>
                  <td>{emp.nom}</td>
                  <td>{emp.salaire} €</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(emp)}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(emp.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {state.employes.length > 0 && (
          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={handleClear}>
              Vider la liste
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListEmp;