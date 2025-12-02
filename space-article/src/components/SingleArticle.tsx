import { Card } from 'react-bootstrap';
import { type Article } from '../types';

interface SingleArticleProps {
  articleFromProps: Article
}

function SingleArticle() {
  return (
    <>
      <Card className="my-3">
        <Card.Img variant="top" src={articleFromProps.imageUrl} />
        <Card.Body>
          <Card.Title>{articleFromProps.title}</Card.Title>
          <Card.Text>{articleFromProps.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleArticle;
