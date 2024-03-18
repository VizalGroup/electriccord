import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts, GetCategories } from "../../redux/actions";
import Style from "./AllProducts.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function AllProducts() {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const productsPerPage = 18;

  useEffect(() => {
    dispatch(GetProducts());
    dispatch(GetCategories());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page to 1 when search term changes
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleWhatsAppClick = (code, title, category) => {
    const message = `Buenos días, quería consultar por ${title}, con el código ${code} que figura en su catálogo de electricord.shop en ${category}. \n\n"Aquí escribe tu consulta"`;
    const whatsappUrl = `https://wa.me/3516658905?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const pagination = [];
  for (let i = 1; i <= pageCount; i++) {
    pagination.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`btn ${page === i ? "btn-light" : "btn-outline-light"} ${
          Style.page
        }`}
        style={{ margin: "5px" }}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={Style.gradientBackground}>
      <h3 className={Style.title}>Todos los Productos</h3>
      <p className={Style.parr}>
        Bienvenido a nuestro catálogo en línea. Injeccordiesel tiene a su
        disposición una amplia variedad de productos para satisfacer tus
        necesidades. No dudes en consultarnos vía{" "}
        <a href="https://wa.me/3516658905" target="_blank">
          WhatsApp
        </a>{" "}
        o por correo electrónico a{" "}
        <a href="mailto:ventas@injeccordiesel.com.ar">
          ventas@injeccordiesel.com.ar
        </a>
        . Para una búsqueda más sencilla puede buscar por categoría en la barra
        de navegación lateral.
      </p>

      {/* Campo de búsqueda */}
      <div className={Style.divSearch}>
        <input
          type="text"
          className={Style.inputSearch}
          placeholder=" 🔎 Buscar productos... "
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {/* Paginación */}
      <div className="d-flex justify-content-center mt-4" >{pagination}</div>

      {/* Contenedor de las Cartas */}
      <div className={Style.container}>
        {displayedProducts.reverse().map((product, index) => (
          <div
            className="card text-bg-dark mb-3"
            style={{ width: "18rem", marginBottom: "1vh" }}
            key={index}
          >
            <img
              src={product.picture}
              className="card-img-top"
              alt={product.title}
              style={{ maxHeight: "280px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.summary}</p>
            </div>
            <ul className="list-group list-group-flush" style={{listStyle: 'none'}}>
              <li className="text-bg-dark mb-3">
                {
                  categories.find(
                    (category) => category.id === product.id_category
                  )?.title
                }
              </li>
              <li className="text-bg-dark mb-3">
                <b>Código: </b>
                {product.code}
              </li>
            </ul>
            <div className="card-body">
              <a
                
                onClick={() =>
                  handleWhatsAppClick(
                    product.code,
                    product.title,
                    categories.find(
                      (category) => category.id === product.id_category
                    )?.title
                  )
                }
              >
                <FaWhatsapp style={{fontSize: '48px'}} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
