import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCategories, GetProductDetail } from "../../redux/actions";
import { useParams } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import Style from "./ProductDetail.module.css";

export default function productDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const categories = useSelector((state) => state.categories);
  const { productDetail } = useSelector((state) => state);

  const handleWhatsAppClick = (code, title, category) => {
    const message = `Buenos días, quería consultar por ${title}, con el código ${code} que figura en su catálogo de electricord.shop en ${category}. \n\n"Aquí escribe tu consulta"`;
    const whatsappUrl = `https://wa.me/3516658905?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const categoryName = categories.find(
    (category) => category.id === productDetail.id_category
  )?.title;

  useEffect(() => {
    dispatch(GetCategories());
    dispatch(GetProductDetail(id));
  }, [dispatch, id]);

  return (
    <div className={Style.gradientBackground}>
      <div class="container" style={{ marginTop: "100px" }}>
        <h4 style={{ textAlign: "center" }}>Resultado de su búsqueda:</h4>
        <br />
        <div className={Style.container}>
          <div className="card text-bg-dark mb-3" style={{ width: "18rem" }}>
            <img
              src={productDetail.picture}
              className="card-img-top"
              alt={productDetail.title}
              style={{ maxHeight: "280px" }}
            />
            <div className="text-bg-dark mb-3">
              <h5 className="card-title">{productDetail.title}</h5>
              <p className="card-text">{productDetail.summary}</p>
            </div>
            <ul
              className="list-group list-group-flush"
              style={{ listStyle: "none" }}
            >
              <li className="text-bg-dark mb-3">
                {
                  categories.find(
                    (category) => category.id === productDetail.id_category
                  )?.title
                }
              </li>
              <li className="text-bg-dark mb-3">
                <b>Código: </b>
                {productDetail.code}
              </li>
            </ul>
            <div className="card-body">
              <a
                onClick={() =>
                  handleWhatsAppClick(
                    productDetail.code,
                    productDetail.title,
                    categoryName
                  )
                }
              >
                <FaWhatsapp style={{ fontSize: "48px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
