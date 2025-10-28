import React, { useState, useContext, useEffect } from 'react';
import { EmployeContext } from './context';
import { useNavigate, useParams } from 'react-router-dom';

const FomEmp = () => {
  const { state, dispatch } = useContext(EmployeContext);
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [formData, setFormData] = useState({ id: null, nom: "", image: "", salaire: "" });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      const empToEdit = state.employes.find(emp => emp.id === parseInt(id));
      if (empToEdit) {
        setFormData(empToEdit);
        setEditMode(true);
      } else {
        navigate('/list');
      }
    } else {
      setEditMode(false);
      setFormData({ id: null, nom: "", image: "", salaire: "" });
    }
  }, [id, state.employes, navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nom || !formData.salaire || !formData.image) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (editMode) {
      dispatch({ type: "EDIT", payload: formData });
    } else {
      dispatch({
        type: "ADD",
        payload: { ...formData, id: Date.now() },
      });
    }

    setFormData({ id: null, nom: "", image: "", salaire: "" });
    navigate('/list'); 
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{editMode ? "Modifier un Employé" : "Ajouter un Employé"}</h2>

      <form className="card p-3 mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez le nom"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salaire</label>
          <input
            type="number"
            className="form-control"
            name="salaire"
            value={formData.salaire}
            onChange={handleChange}
            placeholder="Entrez le salaire"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL de l'image</label>
          <input
            type="url"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Ex: https://exemple.com/photo.jpg"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {editMode ? "Modifier l'employé" : "Ajouter l'employé"}
        </button>
      </form>
    </div>
  );
};

export default FomEmp;