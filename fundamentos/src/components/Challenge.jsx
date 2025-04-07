const Challenge = () => {

    const handleSomar = () => {
        console.log(num1 + num2)
    }

    const num1 = 2
    const num2 = 3

    return (
        <>
            <h3> {num1} </h3>
            <h3> {num2} </h3>
            <button onClick={handleSomar}>Somar</button>
        </>
    )


}

export default Challenge