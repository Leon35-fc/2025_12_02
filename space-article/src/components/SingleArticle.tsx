import { Card } from 'react-bootstrap';
import { type Article } from '../types';

interface SingleArticleProps {
  articleFromProps: Article
}

function SingleArticle({articleFromProps}: SingleArticleProps) {
  return (
    <>
      <Card className="my-3">
        <Card.Img variant="top" src={articleFromProps.image_url} />
        <Card.Body>
          <Card.Title>{articleFromProps.title}</Card.Title>
          <Card.Text>{articleFromProps.summary}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleArticle;
