// import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
// import { useParams } from 'react-router-dom';
// import { useGetProductsQuery } from '../slices/productsApiSlice';
// import { Link } from 'react-router-dom';
import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
// import Meta from '../components/Meta';
// fetch products from backend server
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Message from '../components/Message';

const HomeScreen = () => {
//   const { pageNumber, keyword } = useParams();

//   const { data, isLoading, error } = useGetProductsQuery({
//     keyword,
//     pageNumber,
//   });

    // fetching products data from backend 
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const {data} = await axios.get('/api/products');
    //         setProducts(data);
    //     };

    //     fetchProducts();
    // }, []);

    // fetching products using API slice
    const {data: products, isLoading, error} = useGetProductsQuery();

  return (
    <>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) : (
          <>
          <h1>Latest Products</h1>
          <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}> {/* to make the columns responsive*/}
                  <Product product={product}/>
                </Col>
              ))}
          </Row>
          </>
        )}
    </>
    // <>
    //   {!keyword ? (
    //     <ProductCarousel />
    //   ) : (
    //     <Link to='/' className='btn btn-light mb-4'>
    //       Go Back
    //     </Link>
    //   )}
    //   {isLoading ? (
    //     <Loader />
    //   ) : error ? (
    //     <Message variant='danger'>
    //       {error?.data?.message || error.error}
    //     </Message>
    //   ) : (
    //     <>
    //       <Meta />
    //       <h1>Latest Products</h1>
    //       <Row>
    //         {data.products.map((product) => (
    //           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
    //             <Product product={product} />
    //           </Col>
    //         ))}
    //       </Row>
    //       <Paginate
    //         pages={data.pages}
    //         page={data.page}
    //         keyword={keyword ? keyword : ''}
    //       />
    //     </>
    //   )}
    // </>
  );
};

export default HomeScreen;