import {React, useEffect, useState} from "react";
import Markdown from 'markdown-to-jsx'

const FxArticle = (props) => {
    let {slug} = props
    const [article, setArticle] = useState({
        title:'',
        description:'',
        body:''
    })
    //our slug variable to feed the request
    //you can edit this component to pass any variable into the graphql request
    // const slug = props.slug
    useEffect(() => {
        //request article by slug
        const grabArticle = async() => {
            const response = await fetch('https://api.fxhash.xyz/graphql', {
                method: 'POST',
                headers:{ 'Content-Type': 'application/json' },
                body: JSON.stringify({ query:
                    ` 
                    query {
                        article(slug: "${slug}") {
                            title
                            description
                            body
                        }
                    }
                    `
                })
            })
            const jsonRes = await response.json()
            return jsonRes.data.article
        }
        //call request and translate markdown to jsx
        const handleArticle = async () => {
            let options = {
                userAddress: 'tz1LGRo4e3ke7kiCvJHGtmQSfPvLK5zhEHAR',
                take: 20.0
            }
            
            let articleData = await grabArticle()
            if(typeof articleData === 'object' && articleData !== null){
                setArticle({
                    title:articleData.title,
                    description:articleData.description,
                    body: articleData.body.replaceAll("ipfs://", "https://gateway.fxhash2.xyz/ipfs/")
                    .replaceAll('&#x20;', ' '),
                })
            } else if(typeof articleData == 'string') {
                console.log('fx(hash) endpoint returned a string')
            } else if(articleData == null) {
                console.log('fx(hash) endpoint returned null')
                setArticle({
                    title:'Article Not Found',
                    body:"The fx(hash) endpoint didn't return an article under that slug. Check that your slug matches the URL extension on fx(hash) and try again."
                })
            }
        }
        handleArticle()
    }, []);

    return(        
        <div className="fx-article">
            <h1 className="fx-article-title">{article.title}</h1>
            <h3 className="fx-article-desc">{article.description}</h3>
            <br></br>
            <Markdown className='fx-article-body'>{article.body}</Markdown>
        </div>
    )
}

export default FxArticle