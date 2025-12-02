import { useEffect, useState } from 'react'
import Article  from "../types"

const URL = 'https://api.spaceflightnewsapi.net/v4/articles'

function Article() {
    const [articles, setArticles] = useState<Article[]>([])

    const getArticles = () => {
        fetch(URL)
        .then((res) => {
            if(res.ok){
                console.log('Accesso all\'API eseguita con successo.')
                return res.json
            } else {
                throw new Error('Errore nell\'accesso all\'API.')
            }
        })
        .then((data) =>{
            console.log(data);
            
        })
        .catch((err) => {
            console.log('Errore recupero dati. Errore ', err);
            
        })
        }


    useEffect(() => {
    getArticle()
  }, [])

    return(
        <>
        
        </>
    )


}
export default Article