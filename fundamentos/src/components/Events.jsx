const Events = () => {

    const handleConsoleLog = (e) => {
        console.log(e)
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizou isso</h1>
        }

        return <h1>Renderizou aquilo</h1>
    }

    return (
        <div>
            <div className>
                <button onClick={handleConsoleLog}>Clique aqui</button>
            </div>

            <div>
                <button onClick={ () => {console.log('Clicou!!')} }>Clique aqui também</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events