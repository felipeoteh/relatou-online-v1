import Head from 'next/head'

import Header from '../../components/header'
import Footer from '../../components/footer'

import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Tenant() {

  const [ session, loading  ] = useSession() 
  const router = useRouter()
  const { tenant } = router.query
  const tenantUrl = tenant + "/talks/branco"
  
  const UserEmailAuth = session?.user.email.includes(tenant)  
  //console.log(UserEmailAuth)
  
    return (    
      
        <div id="pageDash">
          <Head>
              <title>Dashboard</title>
          </Head>

          <div className="SideBar">
            <Header/>
            <Footer/>
          </div>
       
          { !UserEmailAuth ? (
            <div className="bodyDash"> 
                         
              <div className="ContendDash">
                <h1 className="Title">
                  Seu e-mail precisa ser da empresa em questão para ter acesso a esse conteúdo...
                </h1>
              </div> 

            </div>
          ) : (  
          <div className="bodyDash">

            <div className="ContendDash">
              <h1>Conteúdo Dashboard!</h1>
            </div>            

          </div>
        )
        }

        
        </div>  
        

    )
  
}
