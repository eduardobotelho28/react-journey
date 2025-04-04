const TemplateExpressions = () => {

    const data = {
        name: 'Eduardo'      ,
        job : 'Programador'  , 
    }

    return (
        <div>
            <h1>Olá {data.name}, tudo bem?</h1>
            <h2>Você atua como {data.job}</h2>
        </div>
    )

}

export default TemplateExpressions