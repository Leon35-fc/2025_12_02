import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SingleArticle from './SingleArticle.tsx';
import { type Article } from '../types/index.ts';

const URL = 'https://api.spaceflightnewsapi.net/v4/articles/';

function Details () {

    const param = useParams()

    console.log(URL + param.id);
    

    const [article, setArticle] = useState<Article[]>([]);
    
      const getArticle = () => {
        fetch(URL + param.id)
          .then((res) => {
            if (res.ok) {
              console.log("Accesso all'API eseguita con successo.");
              return res.json();
            } else {
              throw new Error('Errore recupero dati.');
            }
          })
          .then((data) => {
            console.log('DETAILS', data.results);
            setArticle(data.results)
          })
          .catch((err) => {
            console.log('Errore ', err);
          });
      };
    
      useEffect(() => {
        getArticle();
      }, []);

    return( 
    <>
      <Container fluid={true} className='my-5 px-5'>
        <Row className="justify-content-center">
          <Col>
            <h2 className="text-center">ARTICOLI SPAZIALI</h2>
          </Col>
        </Row>
        <Row className=" flex-wrap">
            <SingleArticle articleFromProps={article} key={article.id} />
        </Row>
      </Container>
    </>
    )
}

export default Details