import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
   const renderList = products.map((product) => {
     const {id,title, image, price,category,description} = product;
     return(
      <div key={id}>
        <Link to={'/product/'+(id)}>
        <figure class="md:flex  rounded-xl p-8 md:p-0  product-item">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900 dothead">
      {title}
      </h1>
  </div>
  <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          {price} TL
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:bg-[#ff9a00] hover:text-white ease-in	duration-200" type="button">
          İncele
        </button>
      </div>
    </div>

    <p class="text-sm text-slate-700 dothoop">
      {description}
    </p>
  </div>
</figure>
        </Link>
     </div>
     );
   });
   return(
    <>{renderList}</>
   )
};

export default ProductComponent;
