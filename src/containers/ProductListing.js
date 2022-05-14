import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import Header from "./Header";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async() => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err)=> {
     console.log("Err",err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(()=>{
  fetchProducts();
  },[]);
  
  console.log("ürünler:",products);
    return (
      <div>
      <Header />
      <div class="item-wrapper">
      <ProductComponent />
      </div>
      </div>
    );
};

export default ProductListing;
