const UserDetails = ( { name, age, job } ) => {

    return (
        <>
            <p>Nome: {name}, Idade: {age}, Trabalho: {job} </p>
            <p> { age >= 18 ? 'pode tirar carteira'  : 'não pode'} </p>
        </>
    )

}

export default UserDetails