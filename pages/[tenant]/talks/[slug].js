import Head from 'next/head'

import Header from '../../partials/header.js'
import Footer from '../../partials/footer.js'

export default function TalkOpen(){   

    return (
        <div>
            <Head>
                <title>Talks da Branco</title>
                <link rel="shortcut icon" href="/desenho-logo.svg" type="image/x-icon"/>
            </Head>
            <Header/>
            <div className="bodyDash"></div>
            <Footer/>
        </div>  
        
    )
    
} 