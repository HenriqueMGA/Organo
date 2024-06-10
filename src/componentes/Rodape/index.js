import './Rodape.css'

const Rodape = () => {
    return (
        <div className='rodape' style={{ backgroundImage: "url(/imagens/fundo.png)" }}>
            <div className='redes__sociais'>
                <a href=''><img src='./imagens/fb.png' alt=''/></a>
                <a href=''><img src='./imagens/tw.png' alt=''/></a>
                <a href=''><img src='./imagens/ig.png' alt=''/></a>
            </div>
            <img className='logo' src='./imagens/logo.png' alt=''/>
            <p>Desenvolvido por Alura/Henrique Melo</p>
        </div>
    )
}

export default Rodape