import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CellPhoneList = () => {
  const [cellPhones, setCellPhones] = useState([]);

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

  return (
    <div>
      <h2>Lista de Celulares</h2>
      <ul>
        {cellPhones.map((cellPhone) => (
          <li key={cellPhone.id}>{cellPhone.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CellPhoneList;
