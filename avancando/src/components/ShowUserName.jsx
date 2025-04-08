import { use, useState } from "react"

const ShowUserName = ( props ) => {

    const [ name, setName ] = useState(props.name)

    return (
        <div>
            <h2>O Nome do Usuário {name}</h2>
            <button onClick={ () => setName('dudu') }>Mudar nome através do UseState</button>
        </div>
    )

}

export default ShowUserName