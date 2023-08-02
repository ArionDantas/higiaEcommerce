import { width } from '@mui/system';
import React from 'react'



const Adverts = () => {

    const style = {
        paddingTop: '126px',
    };

    const styleImg = {
        width: '100%'
    }

    const styleCarrousel = {
        heigth: '400px'
    }

return (
    <div className="container-fluid bg-light" style={style}>
        <div className="secao-anuncios container-css mt-5">

            {/* Carousel */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* The slideshow/carousel */}
                <div className="carousel-inner" style={styleCarrousel}>
                    <div className="carousel-item active">
                        <img src="./img/images.jpg" alt="Los Angeles" className="d-block" style={styleImg} />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/fundo.jpg" alt="Chicago" className="d-block" style={styleImg} />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/fundo.jpg" alt="New York" className="d-block" style={styleImg} />
                    </div>
                </div>

            </div>
        </div>
    </div>
)
}

export default Adverts