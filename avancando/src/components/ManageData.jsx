import { use, useState } from "react"

const ManageData = () => {

    const [ number, setNumber ] = useState(0)

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={ () => setNumber(25) }>Mudar Estado da Variavel</button>
        </div>
    )


}

export default ManageData