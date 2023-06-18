import React, { useEffect, useState } from "react";
import "../Admin css/adminhome.css";
import logo from "../../asset/logo.svg";
import apirequest from "./apirequest";
import Card from "../../component/Card";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdminCard from "./AdminCard";
import Showorder from "./Showorder";
const AdminHome = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Allproduct, setallprouct] = useState([]);
  const [update, setupdate] = useState(false);
  const [changesection, setchangesection] = useState(1);
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });
  const addproduct = async () => {
    if (update) {
      updateval();
      return;
    }

    console.log(product);
    // if (
    //   !(
    //     product.id &&
    //     product.title &&
    //     product.description &&
    //     product.price &&
    //     product.category &&
    //     product.image
    //   )
    // ) {
    //   console.log("came here");
    //   return;
    // }
    console.log(product);
    const PostOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    const result = await apirequest(
      "http://localhost:3000/product",
      PostOptions
    );
    if (result) console.log(result);
    setShow(false);
    fetchdata();
  };
  const UpdateProduct = async (id) => {
    setShow(true);
    setupdate(true);
    console.log(Allproduct, id);
    setProduct(Allproduct[id]);
    setchangesection(1);
    return;
    // const putOptions = {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // };
    // const result = await apirequest(
    //   "http://localhost:3500/product/21",
    //   putOptions
    // );
  };
  const updateval = async () => {
    const putOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    const result = await apirequest(
      `http://localhost:3000/product/${product.id}`,
      putOptions
    );
    fetchdata();
  };
  const deleteproduct = async (id) => {
    console.log("delete");
    const DeleteOptions = {
      method: "DELETE",
    };
    const result = await apirequest(
      `http://localhost:3000/product/${id}`,
      DeleteOptions
    );
    if (result) console.log(result);
    fetchdata();
  };
  const fetchdata = async () => {
    const response = await axios.get("http://localhost:3000/product");
    setallprouct(response.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className="admin_navbar">
        <div className="admin_navbar_left_container">
          A
          <img src={logo} alt="" height="40px" />Z cart
        </div>
      </div>
      <div className="adminhome_container">
        <div className="sidebar_container">
          <div
            className="add_product_container"
            onClick={() => setchangesection(1)}
          >
            Add Products
          </div>
          <div
            className="add_product_container"
            onClick={() => setchangesection(2)}
          >
            Orders
          </div>
        </div>
        <div className="component_container">
          {changesection == 1 ? (
            <div className="display_element_grid">
              {Allproduct &&
                Allproduct.map((item, index) => {
                  return (
                    <AdminCard
                      title={item.title}
                      imgsrc={item.image}
                      cost={item.price}
                      rating={item.rating.rate}
                      description={item.description}
                      id={item.id}
                      index={index}
                      update={UpdateProduct}
                      deletee={deleteproduct}
                    />
                  );
                })}
            </div>
          ) : (
            <Showorder />
          )}
        </div>
      </div>
      <button
        className="admin_add_product"
        variant="primary"
        onClick={() => {
          handleShow();
          setchangesection(1);
        }}
      >
        +
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form_container_admin_add_product">
            <input
              type="text"
              name=""
              id=""
              placeholder="id"
              value={Allproduct.length}
              onChange={(e) => setProduct({ ...product, id: e.target.value })}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="title"
              required
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
            <textarea
              type="text"
              name=""
              id=""
              placeholder="description"
              required
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="price"
              required
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
            <input
              type="text"
              name=""
              id=""
              value={product.category}
              placeholder="category"
              required
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="image"
              required
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="rating"
              required
              value={product.rating.rate}
              onChange={(e) =>
                setProduct({
                  ...product,
                  rating: { rate: e.target.value, count: 0 },
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addproduct()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminHome;
