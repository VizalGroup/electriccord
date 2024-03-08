import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCategories } from "../../redux/actions";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetCategories());
  }, [dispatch]);
  
  console.log(categories);
  
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
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
            <FaSearch style={{color: 'whitesmoke'}} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
