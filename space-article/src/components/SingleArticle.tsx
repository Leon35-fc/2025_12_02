import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { type Article } from '../types';

interface SingleArticleProps {
  articleFromProps: Article
}

function SingleArticle({articleFromProps}: SingleArticleProps) {

// const navigate = useNavigate()

const path = `/details/${articleFromProps.id}`

console.log('Percorso', path);


  return (
    <>
        <Col xs={12} md={6} lg={4} xl={3} className='my-2'>
            <Card as={Link} to={path} className="h-100" key={articleFromProps.id}>
            <Card.Img variant="top" src={articleFromProps.image_url} />
            <Card.Body>
                <Container>
                    <Row className='justify-content-end'>
                        <Card.Title>{articleFromProps.title}</Card.Title>
                        <Card.Text><span className='fw-semibold'>Author:</span> {articleFromProps.authors[0].name}</Card.Text>
                        <Card.Text className=''>{articleFromProps.summary}</Card.Text>
                        <Card.Text className='fs-6 fw-semibold'>{articleFromProps.published_at}</Card.Text>
                        <Card.Text><a href={articleFromProps.url}>{articleFromProps.url}</a></Card.Text>
                    </Row>
                </Container>
            </Card.Body>
            </Card>
        </Col>
    </>
  );
}

export default SingleArticle;
