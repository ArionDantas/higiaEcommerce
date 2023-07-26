import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { getItem } from '../../services/LocalStorageFuncs';


const Navbar = () => {

    const navigate = useNavigate();
    const user = getItem('user')
    // const name = null

    const styles = {
        backgroundColor: '#DDD',
    };

    const handleExit = () => {
        localStorage.clear();
        navigate('/')
        window.location.reload(true);
    }

    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-md navbar-light bg-light pt-3 d-flex flex-column p-0">
                <div className="d-flex container container-css">

                    <Link to={'/'} className='nav-link' onClick={() => { window.location.reload() }}>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="src/img/logo-higia-bgremove.png" alt="Logo Farmácia Higia" style={{ width: '80px', height: '80px' }} />
                        </div>
                    </Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <form className="d-flex ms-auto">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <ul className="navbar-nav mb-2 mb-lg-0 principal gap-3 ms-auto">
                            <li className="nav-item d-flex">
                                <div className="dropdown text-end">
                                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                                        {user !== null
                                            ? (
                                                // name = user.name.split(' ')
                                                `${user.name}`)
                                            : (<>
                                                <PersonIcon />
                                                Minha conta
                                            </>)
                                        }
                                    </a>
                                    <ul className="dropdown-menu text-small">

                                        {user ? (
                                            <>

                                                <li><Link to={'/conta'} className='dropdown-item'>Conta</Link></li>
                                                <li><Link to={'/'} className='dropdown-item'>Configurações</Link></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><Link to={'/'} className='dropdown-item text-danger' onClick={handleExit}>Sair</Link></li>
                                            </>
                                        ) : (

                                            <>
                                                <li><Link to={'/login'} className='dropdown-item'>Login</Link></li>
                                                <li><Link to={'/cadastro'} className='dropdown-item'>Cadastre-se</Link></li>
                                            </>
                                        )}

                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <ShoppingCartIcon />
                                {/* <a className="nav-link active" aria-current="page" href="#">Carrinho</a> */}
                                <Link to={'/carrinho'} className='dropdown-item'>Carrinho</Link>
                            </li>
                            {/* <li className="nav-item d-flex align-items-center">
                                <span className="material-symbols-outlined">shopping_basket</span>
                                <a className="nav-link active" aria-current="page" href="#">Meus pedidos</a>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="w-100 p-3" style={styles}>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/medicamentos'} className='nav-link'>Medicamentos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/dermocosmeticos'} className='nav-link'>Dermocosméticos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/perfumaria'} className='nav-link'>Perfumaria</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/genericos'} className='nav-link'>Genéricos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/nutricao'} className='nav-link'>Nutrição</Link>
                            </li>
                            {/* <li className="nav-item">
                            <Link to={'/'} className='nav-link'>Promoções</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar