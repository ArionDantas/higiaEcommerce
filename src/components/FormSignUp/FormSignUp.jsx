import React from 'react'

const FormSignUp = () => {

    // {
    //     "id": 0,
    //     "cpf": "string",
    //     "email": "string",
    //     "password": "string",
    //     "firstName": "string",
    //     "lastName": "string",
    //     "phone": "string",
    //     "birthDate": "2023-07-21T23:35:45.694Z",
    //     "recoverCode": "string",
    //     "isActive": true,
    //     "passwordCrypt": "string"
    //   }

    return (
        <div>
            
            <div className="row py-5">
                <div className="col">
                    <div className='container-client shadow-lg border rounded rounded px-5 pb-5' style={{backgroundColor: '#ddd'}}>
                    <h4 className='py-5 text-center'>Cadastre-se</h4>
                        <div className='card-content-client'>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group mb-3">
                                        <label className='mb-2' htmlFor="firstName">Nome:</label>
                                        <input
                                            id="firstName"
                                            className="form-control"
                                            type="text"
                                            placeholder='Insira seu nome'
                                        // value={client.content.firstName == null ? '' : client.content.firstName}
                                        />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group mb-3">
                                        <label git className='mb-2' htmlFor="lastName">Sobrenome:</label>
                                        <input
                                            id="lastName"
                                            className="form-control"
                                            type="text"
                                            placeholder='Insira seu sobrenome'
                                        // value={client.content.lastName == null ? '' : client.content.lastName}
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col">
                                    <div className="form-group mb-3">
                                        <label git className='mb-2' htmlFor="email">Email:</label>
                                        <input
                                            id="email"
                                            className="form-control"
                                            type="email"
                                            placeholder='Insira seu e-mail'
                                        // value={client.content.email == null ? '' : client.content.email}
                                        />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="form-group mb-3">
                                        <label git className='mb-2' htmlFor="cpf">CPF:</label>
                                        <input
                                            id="cpf"
                                            className="form-control"
                                            type="text"
                                            placeholder='Ex.: 12345678911'
                                        // value={client.content.cpf == null ? '' : client.content.cpf}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group mb-3">
                                        <label git className='mb-2' htmlFor="password">Senha:</label>
                                        <input
                                            id="password"
                                            className="form-control"
                                            type="text"
                                            placeholder='Insira sua senha mais forte'
                                        // value={client.content.password == null ? '' : client.content.password}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group mb-3">
                                        <label git className='mb-2' htmlFor="phone">Número de celular:</label>
                                        <input
                                            id="phone"
                                            className="form-control"
                                            type="text"
                                            placeholder='Ex.: 27999999999'
                                        // value={client.content.phone == null ? '' : client.content.phone}
                                        />
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="form-group mb-3">
                                        <label git className='mb-2' htmlFor="birthDate">Data de aniversário:</label>
                                        <input
                                            id="birthDate"
                                            className="form-control"
                                            type="date"
                                        // value={client.content.birthDate == null ? '' : client.content.birthDate}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button className='btn btn-success w-100 mt-5'>Cadastre-se</button>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center w-100">
                    <img src="src/img/sign-up.svg" alt="SignUp" style={{width: '500px'}}/>
                </div>
            </div>
        </div>
    )
}

export default FormSignUp