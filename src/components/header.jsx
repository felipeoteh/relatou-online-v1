import { signIn, signOut, useSession } from 'next-auth/client'
import MenuDash from './menu'

import { CgHomeAlt } from 'react-icons/cg'
import { GoProject } from 'react-icons/go'
import { FaRegUserCircle } from 'react-icons/fa'

import Link from 'next/link'


export default function Header() {
    const [ session  ] = useSession() 
    return (
    <header>  
        <div className="header">            
            <a href="/" className="logo">
                <img src="/logo-relatou-branco.svg" alt="relatou.online"/>
            </a>
        </div>
        <div className="BoxAvatar">
            { !session ? (
                <div className="BtLogIn" onClick={ () => signIn('google') }>
                    <img src="/google-svg-roxo.svg"></img>
                    Login com <strong>Google</strong>
                </div>
            ) : (         
                <div className="Logado">
                    <img src={session?.user?.image}></img>
                    <p>
                        Olá, {session?.user?.name}
                        <div className="BtLogOut" onClick={ () => signOut() } ><strong>Sair</strong></div>
                    </p>
                </div>
            )
            }
        </div>
        <div className="MenuDash">
            <MenuDash />
                <ul className="MenuDash">
                    <li><Link href="/benova"><a><CgHomeAlt/> Home</a></Link></li>
                    <li><Link href="/benova/projetos"><a><GoProject/> Projetos</a></Link></li>
                    <li><Link href="/benova/perfil"><a><FaRegUserCircle/>Perfil</a></Link></li>
                </ul>
            <MenuDash />
        </div>
    </header>
    )
}
