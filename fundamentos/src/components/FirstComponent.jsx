import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //comentário fora do JSX
    return (
        <>
            {/* //comentário dentro do jsx */}
            <div>Meu Primeiro Componente</div>
            <MyComponent/>
        </>
    );

}

export default FirstComponent