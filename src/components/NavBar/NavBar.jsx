import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCategories, GetProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  
  useEffect(() => {
    dispatch(GetCategories());
    dispatch(GetProducts());
  }, [dispatch]);
  
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.trim() !== "") {
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase()) ||
        product.code.toLowerCase().includes(term.toLowerCase())
      );
      setSearchSuggestions(filteredSuggestions);
    } else {
      setSearchSuggestions([]);
    }
  };
  
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid" >
        <a class="navbar-brand" href="/" style={{color: 'whitesmoke'}}>
          Inicio
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <TfiMenuAlt style={{ color: 'white' }} />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/contacto" style={{color: 'whitesmoke'}}>
                Contacto
              </a>
            </li>
            <li class="nav-item dropdown" >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color: 'whitesmoke'}}
              >
                Categorías
              </a>
              <ul class="dropdown-menu bg-dark">
                {categories.map((category) => (
                  <li key={category.id} >
                    <Link
                      class="dropdown-item"
                      to={`/categoria/${category.id}`}
                      style={{color: 'whitesmoke'}}
                    >
                      <b>{category.title}</b>
                    </Link>
                  </li>
                ))}
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/productos" style={{color: 'whitesmoke'}}>
                    <b>Mostrar Todos</b>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="position-relative">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
           
            </form>
            {searchSuggestions.length > 0 && (
              <ul className="list-group position-absolute w-100" style={{ top: "100%", zIndex: 1 }}>
                {searchSuggestions.map((product) => (
                  <li key={product.id} className="list-group-item">
                    <Link to={`/producto/${product.id}`} style={{ color: "black", textDecoration: 'none' }}>
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
