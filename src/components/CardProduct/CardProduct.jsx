import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import {getItem, setItem} from '../../services/LocalStorageFuncs'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CardProduct({ typeProduct }) {
    const [cellPhones, setCellPhones] = useState([]);
    const [page, setPage] = useState(1);
    const [arrFiltrado, setArrFiltrado] = useState([]);
    const [cart, setCart] = useState(getItem('cart') || []);

    const MAX_LENGHT_PRODUCT = 20

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        const fetchCellPhones = async () => {
            try {
                const response = await axios.get(
                    `https://api.mercadolibre.com/sites/MLB/search?q=${typeProduct}`
                );

                setCellPhones(response.data.results);
            } catch (error) {
                console.error('Erro ao obter os celulares:', error);
            }
        };

        fetchCellPhones();
    }, []);

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            const arrCarFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrCarFilter)
            setItem('cart', arrCarFilter)
        } else {
            setCart([...cart, obj])
            setItem('cart', [...cart, obj])
        }
    }

    useEffect(() => {
        // Chamando a função para exibir os produtos em grupos de 10 (por exemplo).
        exibirProdutosEmGrupos(MAX_LENGHT_PRODUCT);
    }, [cellPhones]); // Executa novamente quando o estado 'cellPhones' é atualizado

    function fatiarArrayEmGrupos(arr, tamanhoDoGrupo) {
        const fatias = [];
        for (let i = 0; i < arr.length; i += tamanhoDoGrupo) {
            fatias.push(arr.slice(i, i + tamanhoDoGrupo));
        }
        setArrFiltrado(fatias);
    }

    // Função para exibir os produtos em grupos
    function exibirProdutosEmGrupos(limitPorGrupo) {
        try {
            fatiarArrayEmGrupos(cellPhones, limitPorGrupo);
        } catch (error) {
            console.error('Erro ao obter e exibir produtos:', error);
        }
    }

    return (
        <Stack spacing={5}>
            <div className="d-flex justify-content-center align-itens-center gap-5 flex-wrap mt-5">
                {/* Renderizar o conteúdo de arrFiltrado aqui */}
                {arrFiltrado[page - 1]?.map((produto) => (  // Note o page - 1, pois a página inicia em 1, mas o array é baseado em índices (que começam em 0).
                    <div className="card p-2 d-flex flex-column justify-content-between" style={{ width: '300px' }} key={produto.id}>
                        <img className="w-75 mx-auto" src={produto.thumbnail} alt=" logo da higia" />

                        <div className="pt-3 mx-auto text-center">
                            <h5>{produto.title}</h5>
                            <p>Qtd. {produto.sold_quantity}</p>
                        </div>

                        <div className="price text-center">
                            <h5>R$ {produto.price}</h5>
                        </div>

                        {
                            cart.some((itemCart) => itemCart.id === produto.id) ? (
                                <button type="button" className="btn btn-primary py-2 d-flex justify-content-center align-items-center gap-2"
                                    onClick={() => handleClick(produto)}
                                >
                                    Adicionado
                                    <BsFillCartCheckFill />
                                </button>
                            ) : (
                                <button type="button" className="btn btn-success py-2 d-flex justify-content-center align-items-center gap-2"
                                    onClick={() => handleClick(produto)}
                                >
                                    Adicionar
                                    <BsFillCartPlusFill />
                                </button>
                            )
                        }
                    </div>
                ))}
            </div>

            <Pagination className='mx-auto mb-5' shape="rounded" color='success' size="large" count={arrFiltrado.length} page={page} onChange={handleChange} />
        </Stack>
    );
};

export default CardProduct;