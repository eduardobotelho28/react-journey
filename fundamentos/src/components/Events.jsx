const Events = () => {

    const handleConsoleLog = (e) => {
        console.log(e)
    }

    return (
        <div>

            <div className>
                <button onClick={handleConsoleLog}>Clique aqui</button>
            </div>

            <div>
                <button onClick={ () => {console.log('Clicou!!')} }>Clique aqui também</button>
            </div>
        </div>
    )
}

export default Events