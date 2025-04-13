
import { use, useState } from 'react'
import './MyForm.css'

const MyForm = () => {

    const [ name, setName ]  = useState('')
    const [ email, setEmail] = useState('')

    // const handleName = (e) => {
    //     setName(e.target.value)
    //     console.log(name)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('enviado formulario...')
    }

    console.log(name)
    console.log(email)

    return (

        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name"  placeholder='digite o seu nome' onChange={ (e) => setName(e.target.value)}/>
                </div>
                <label>
                    <span>Email</span>
                    <input type="email" name='email'  placeholder='digite o seu email' onChange={ (e) => setEmail(e.target.value) }/>
                </label>
                <input type="submit" value="enviar" />
            </form>
        </div>

    )

}

export default MyForm