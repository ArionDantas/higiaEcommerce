import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getItem, setItem } from '../../services/LocalStorageFuncs';
import { BsFillCartDashFill } from 'react-icons/bs';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

const Cart = () => {
    const [data, setData] = useState(getItem('cart') || []);
    const [quantityProduct, setQuantityProduct] = useState(1)

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id);
        setData(arrFilter);
        setItem('cart', arrFilter);
    };

    const subTotal = data.reduce((acc, cur) => acc + cur.price, 0)

    const moedaBrasileira = (value) => {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    // const handleQuantityChange = (e) => {
    //     console.log(e);
    //     setQuantityProduct(e.target.value);
    // };

    // const adicionarPropriedade = (data) => {

    // }

    return (
        <div className='content container pt-5'>
            <div >
                {data.length === 0 ? (
                    <div className="d-flex flex-column align-items-center justify-content-center gap-5">
                        <h1 className='h1'>Carrinho está vazio</h1>
                        <img src="src/img/empty-cart.svg" alt="Carrinho vazio" style={{width: '350px'}}/>
                    </div>
                ) : (

                    <div>
                        <table className='table text-center pt-5'>
                            <thead>
                                <tr>
                                    <th scope='col'>Produto</th>
                                    <th scope='col'>Quantidade</th>
                                    <th scope='col'>Preço</th>
                                    <th scope='col'>Subtotal</th>
                                    <th scope='col'>Ação</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {data.map((e) => (
                                    <tr key={e.id}>
                                        <td className='w-25'>
                                            <div className='row div-remedio d-flex justify-content-center align-items-center m-auto gap-1'>
                                                <div className='col'>
                                                    <img src={e.thumbnail} alt='remedio' style={{ width: '100px', height: '100px' }} />
                                                </div>
                                                <div className='col descricao-remedio'>
                                                    <h6>{e.title}</h6>
                                                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ab reprehenderit
                            quidem natus</p> */}
                                                </div>
                                            </div>
                                        </td>

                                        <td style={{ verticalAlign: 'middle', width: '15%' }}>
                                            <input
                                                className='form-control w-50 m-auto text-center'
                                                type='number'
                                                name='txtQuantidade'
                                                id='quantidade'
                                                value={1}
                                                // value={quantityProduct}
                                                min={1}
                                            // onChange={handleQuantityChange}
                                            />
                                        </td>

                                        <td style={{ verticalAlign: 'middle' }}>
                                            <h6>{moedaBrasileira(e.price)}</h6>
                                        </td>
                                        <td style={{ verticalAlign: 'middle' }}>
                                            <h6>{moedaBrasileira(e.price)}</h6>
                                        </td>
                                        <td style={{ verticalAlign: 'middle' }}>
                                            <button
                                                type='button'
                                                className='btn btn-danger py-2 d-flex mx-auto'
                                                onClick={() => removeItem(e)}
                                            >
                                                <BsFillCartDashFill size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-between align-items-center my-5">
                            <div>
                                <Link className="text-decoration-none" to={'/'}>
                                    <div className="btn btn-danger p-3 w-100 d-flex align-items-center gap-2">
                                        <IoArrowBackCircleSharp size={25} />
                                        <p className='m-0' style={{ textDecoration: 'none' }}>Escolher mais produtos</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="preco w-25">
                                <div className="border rounded p-2">
                                    <div className="total d-flex justify-content-between align-items-center px-2 py-3 bg-primary text-white rounded">
                                        <div>
                                            <h6 className='m-0'>Total:</h6>
                                        </div>
                                        <div>
                                            <h6 className='m-0'>{moedaBrasileira(subTotal)}</h6>
                                        </div>
                                    </div>
                                    <div className="formas-pagamento mt-3">
                                        <a className="btn btn-success w-100">Finalizar compra</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Cart;

