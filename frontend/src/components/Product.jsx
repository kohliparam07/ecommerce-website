import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    // displaying each product as a card
    <Card className='my-3 p-3 rounded'>
        {/* image of product  */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        {/* name  */}
        <Link to={`/product/${product._id}`}> 
            {/* displaying product name as a div  */}
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* rating  */}
        <Card.Text as='div'>
            <Rating value={product.Rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
        </Card.Text>

        {/* price  */}
        <Card.Text as='h3'>
            ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;