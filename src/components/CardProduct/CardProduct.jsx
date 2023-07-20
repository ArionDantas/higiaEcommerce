import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ITEMS_PER_PAGE = 10;

const CardProduct = () => {
  const [cellPhones, setCellPhones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCellPhones = async () => {
      try {
        const response = await axios.get(
          'https://api.mercadolibre.com/sites/MLB/search?q=celular'
        );

        setCellPhones(response.data.results);
      } catch (error) {
        console.error('Erro ao obter os celulares:', error);
      }
    };

    fetchCellPhones();
  }, []);

  // Função para calcular a página inicial do slice (itens que serão mostrados na página)
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = cellPhones.slice(indexOfFirstItem, indexOfLastItem);

  // Função para mudar a página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentItems.map((cellPhone) => (
        <div className="card p-2" style={{ width: '300px' }} key={cellPhone.id}>
        <img className="w-75 mx-auto" src={cellPhone.thumbnail} alt=" logo da higia" />
    
        <div className="pt-3 mx-auto text-center">
            <h5>{cellPhone.title}</h5>
            <p>Qtd. {cellPhone.sold_quantity}</p>
        </div>
    
        <div className="price text-center">
            <h5>R$ {cellPhone.price}</h5>
        </div>
    
        <button type="button" className="btn btn-success py-2">
            Adicionar <ShoppingCartIcon />
        </button>
    </div>
      ))}

      <div className="text-center mt-4">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(cellPhones.length / ITEMS_PER_PAGE) }).map((_, index) => (
            <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardProduct;





{/* <div className="card p-2" style={{ width: '300px' }} key={cellPhone.id}>
    <img className="w-75 mx-auto" src={cellPhone.thumbnail} alt=" logo da higia" />

    <div className="pt-3 mx-auto text-center">
        <h5>{cellPhone.title}</h5>
        <p>Qtd. {cellPhone.sold_quantity}</p>
    </div>

    <div className="price text-center">
        <h5>R$ {cellPhone.price}</h5>
    </div>

    <button type="button" className="btn btn-success py-2">
        Adicionar <ShoppingCartIcon />
    </button>
</div> */}
