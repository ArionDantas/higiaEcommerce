import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

    const styles = {
        backgroundColor: '#DDD',
    };

    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-md navbar-light bg-light py-3">
                <div className="d-flex container container-css">
                    <div className="me-auto">
                        <a className="navbar-brand" href="#">Farmacia Higia</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0 principal ms-5 gap-3">
                            <li className="nav-item d-flex align-items-center">
                                <div className="dropdown text-end">
                                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <PersonIcon />
                                        Minha conta
                                    </a>
                                    <ul className="dropdown-menu text-small">
                                        <li><a className="dropdown-item" href="#">Conta</a></li>
                                        <li><a className="dropdown-item" href="#">Configurações</a></li>
                                        <li><a className="dropdown-item" href="#">Cadastre-se</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item text-danger" href="#">Sair</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <ShoppingCartIcon />
                                <a className="nav-link active" aria-current="page" href="#">Carrinho</a>
                            </li>
                            {/* <li className="nav-item d-flex align-items-center">
                                <span className="material-symbols-outlined">shopping_basket</span>
                                <a className="nav-link active" aria-current="page" href="#">Meus pedidos</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-md navbar-light" style={styles}>
                <div className="container container-css">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Medicamentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dermocosméticos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Perfumaria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Genéricos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nutrição</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Promoções</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar