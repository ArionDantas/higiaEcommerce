import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../services/queryCliente';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { getItem, setItem } from '../../services/LocalStorageFuncs'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import FakerCards from '../FakeCards/FakerCards';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CardProduct({ typeProduct }) {
    const [cellPhones, setCellPhones] = useState([]);
    const [page, setPage] = useState(1);
    const [arrFiltrado, setArrFiltrado] = useState([]);
    const [cart, setCart] = useState(getItem('cart') || []);
    const apiKey = `https://api-farmacia-higia-java-d263a377630d.herokuapp.com/products/type/${typeProduct}`

    const MAX_LENGHT_PRODUCT = 20
    const MAX_TEXT_LINES = 3;

    console.log(cellPhones);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const getProducts = async () => {
        const response = await axios.get(apiKey);
        // return response.data.results;
        return response.data.content;
    };

    const { data: initialData, isLoading, isError } = useQuery({
        queryKey: ['arrFiltrado'],
        queryFn: getProducts
    });

    useEffect(() => {
        if (!isLoading && !isError) {
            setCellPhones(initialData);
        }
    }, [initialData, isLoading, isError]);

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
        exibirProdutosEmGrupos(MAX_LENGHT_PRODUCT);
    }, [cellPhones]);

    useEffect(() => {
        window.scrollTo(0, 9999);
    }, [page]);

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

    const moedaBrasileira = (value) => {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    return (
        <Stack spacing={5} >
            <div className="d-flex justify-content-center align-itens-center gap-5 flex-wrap mt-5">
                {/* Renderizar o conteúdo de arrFiltrado aqui */}
                {isLoading ? (
                    <>
                        <FakerCards />
                        <LoadingSpinner />
                    </>
                ) : isError ? (
                    <div>Erro ao carregar os produtos.</div>
                ) : (
                    arrFiltrado[page - 1]?.map((produto) => (
                        <div className="card p-2 d-flex flex-column justify-content-between" style={{ width: '300px' }} key={produto.id}>
                            <img className="w-75 mx-auto" src={produto.imgUrl} alt=" logo da higia" />

                            <div className="pt-3 mx-auto text-center word-wrap">
                                <h5 className='word-wrap' style={{ maxHeight: `${MAX_TEXT_LINES * 1.4}em`, overflow: 'hidden' }}>{produto.description}</h5> 
                                {/* <p>Qtd. {produto.sold_quantity}</p> */}
                            </div>

                            <div className="price text-center">
                                <h5>{produto.value === null ? moedaBrasileira(1) : moedaBrasileira(produto.value)}</h5>
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
                    ))
                )}
            </div>

            <Pagination className='mx-auto mb-5' shape="rounded" color='success' size="large" count={arrFiltrado.length} page={page} onChange={handleChange} />
        </Stack>
    );
};

export default CardProduct;