// // app/products/[slug]/page.jsx
// async function getProduct(slug) {
//   const res = await fetch(`https://two026-e-commerce-jewellery-backend.onrender.com/product/slug/${slug}`, {
//     cache: "no-store",
//   });
//   return res.json();
// }

// export default async function ProductDetails({ params }) {
//   const product = await getProduct(params.slug);

//   return (
//     <div className="grid md:grid-cols-2 gap-10">
//       <img
//         src={`https://two026-e-commerce-jewellery-backend.onrender.com/${product.images[0]}`}
//         className="rounded-xl"
//       />

//       <div>
//         <h1 className="text-2xl font-bold">
//           {product.name}
//         </h1>

//         <p className="text-gray-500 mt-2">
//           {product.description}
//         </p>

//         <p className="text-2xl font-semibold mt-4">
//           ₹{product.price}
//         </p>

//         <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }


const Products =()=>{
    return <><div><p>this is my Products</p></div></>
}

export default Products;
