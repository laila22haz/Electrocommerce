import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function ProductPreview({_id, category, name, pictures}) {
  const imageUrl = pictures && pictures.length > 0 ? pictures[pictures.length - 1].url : undefined;

  return (
    <LinkContainer to={`/product/${_id}`} style={{cursor: 'pointer', width: '13rem', margin: '10px'}}>
      <Card style={{width: '20rem', margin: '10px'}}>
        {/* Check if imageUrl is not empty before rendering the image */}
        {imageUrl && <Card.Img variant='top' className="product-preview-img" src={imageUrl} style={{height: '150px', objectFit: 'cover'}}/>}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Badge bg='warning' text='dark'>
            {category}
          </Badge>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default ProductPreview;
