import './Game.css'

const Game = ( { verifyLetter } ) => {

    return (
        <div className="game">
            <p className='points'>

                <span>Pontuação : 000</span>
            </p>

            <h3>Adivinhe a Palavra</h3>

            <h3 className='tip'>
                Dica sobre a palavra : <span>Dica...</span>
            </h3>

            <div className='wordContainer'>
                <span className='letter'>A</span>
                <span className='blankSquare'></span>
            </div>

            <div className="letterContainer">
                <p>Tente enviar uma letra da palavra</p>
                <form>
                    <input type="text" name='letter' maxLength='1' required/>
                    <button>Jogar</button>
                </form>
            </div>

            <div className="wrongLettersContainer">
                <p>Letras já utilizadas</p>
                <span>A, </span>
                <span>B, </span>
            </div>
        </div>
    )

}

export default Game