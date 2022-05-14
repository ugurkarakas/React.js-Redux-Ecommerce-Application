import React, {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/actions/productActions';
import Header from './Header';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {id,image, title, description, price} = product;
  const {productId} = useParams();
  const dispatch = useDispatch();
  console.log(product);
  const fetchProductsDetail = async () =>{
    const response = await axios.get('https://fakestoreapi.com/products/'+(productId)).catch((err) => {
      console.log("Err", err);
    });
    dispatch(selectProduct(response.data));
  };
  useEffect(() => {
    if(productId && productId !== "") fetchProductsDetail();
  },[productId]);
    return (
      <div>
        {Object.keys(product).length === 0 ?(
          <h1 class="flex justify-center mt-10">yükleniyor...</h1>
        ) : (
          <div class="flex flex-col justify-center items-center mt-10">
            <Header></Header>
  <div aria-details="card" class="relative flex max-w-[700px] min-w-[600px]	 mt-12 ease-in-out h-96 overflow-hidden bg-white shadow-2xl">
    <div aria-details="image" class="relative min-w-xm w-[300px] scale-50 h-full bg-white flex justify-center items-center">
      <img class="h-96 max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5 object-cover	"src={image} />
    </div>
    <div aria-details="details" class="bg-[#ffbc77] relative min-w-sm h-full flex p-5 flex-col justify-start transition delay-700 ease-in-out">
      <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl py-5">{title}</h1>
      <p class="text-md font-normal text-left text-black dotdescription">{description}</p>
 
      <div class="flex justify-between items-center mt-10">
        <h2 class=""><span class="text-4xl text-black font-extrabold">{price}</span><sup class="text-2xl text-black font-semibold">TL</sup></h2>
        <a href="#" class="px-4 py-2 bg-white rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black font-bold">Sepete Ekle</a>
      </div>
    </div>
  </div>
</div>
        )}
      </div>
    );
};

export default ProductDetail;
