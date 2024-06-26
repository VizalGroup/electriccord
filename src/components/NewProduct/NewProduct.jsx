import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostProduct, GetCategories } from "../../redux/actions";
import { Form, Button, Alert } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Styles from "./NewProduct.module.css"

export default function NewProduct() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    code: "",
    picture: null,
    id_category: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const categories = useSelector((state) => state.categories);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(PostProduct(formData));
      setShowSuccess(true);
    } catch (error) {
      console.error("Error al publicar el producto:", error);
      setShowError(true);
    }
  };

  const SubirImagenesClodinari = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", import.meta.env.VITE_API_UPLOAD_PRESET);

    const response = await fetch(import.meta.env.VITE_API_CLOUDINARY_URL, {
      method: "POST",
      body: data,
    });

    const file = await response.json();
    setFormData({ ...formData, [e.target.id]: file.secure_url });
  };

  useEffect(() => {
    dispatch(GetCategories());
  }, [dispatch]);

  
  return (
    <div className="container">
      <br />
      <a
        className="btn btn-primary"
        href="/dashboard"
        style={{ marginBottom: "3vh" }}
      >
        <FaArrowLeft/>
      </a>

      <h2>Nuevo Producto</h2>
      {showSuccess && (
        <Alert variant="success">Producto publicado con éxito.</Alert>
      )}
      {showError && (
        <Alert variant="danger">
          Error al publicar el producto. Por favor, inténtalo de nuevo.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="summary">
          <Form.Label>Resumen</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="code">
          <Form.Label>Código</Form.Label>
          <Form.Control
            type="text"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <br />
        <Form.Group controlId="id_category">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            as="select"
            name="id_category"
            value={formData.id_category}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccionar Categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="picture">
          <Form.Label>Imagen</Form.Label>
          <br />
          <Form.Text className="text-muted">
            Recuerda subir una imagen PNG para que el aspecto de la página de
            cada categoría se muestre correctamente. Convierte tu Imagen{" "}
            <a
              href="https://www.remove.bg/es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aquí
            </a>
          </Form.Text>
          <Form.Control
            type="file"
            name="file"
            onChange={(e) => SubirImagenesClodinari(e)}
            required
          />
        </Form.Group>
        <div>
              {formData.picture ? (
                <div>
                  <img className={Styles.imageRender} src={formData.picture} />
                </div>
              ) : null}
            </div>
        <br />
        <Button variant="primary" type="submit">
          Publicar Producto
        </Button>
      </Form>
    </div>
  );
}
