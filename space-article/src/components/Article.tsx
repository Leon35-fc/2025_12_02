import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleArticle from './SingleArticle.tsx';
import { type Article } from '../types/index.ts';

const URL = 'https://api.spaceflightnewsapi.net/v4/articles';

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          console.log("Accesso all'API eseguita con successo.");
          return res.json();
        } else {
          throw new Error('Errore recupero dati.');
        }
      })
      .then((data) => {
        console.log(data.results);
        setArticles(data.results)
      })
      .catch((err) => {
        console.log('Errore ', err);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Container fluid={true} className='my-5 px-5'>
        <Row className="justify-content-center">
          <Col>
            <h2 className="text-center">ARTICOLI SPAZIALI</h2>
          </Col>
        </Row>
        <Row className=" flex-wrap">
            {articles.map((article) => {
              return <SingleArticle articleFromProps={article} key={article.id} />;
            })} 
        </Row>
      </Container>
    </>
  );
}
export default Articles;
