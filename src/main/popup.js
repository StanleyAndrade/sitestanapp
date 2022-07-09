import React, {useState} from "react"


export default function Popup () {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-mod1')
  } else {
    document.body.classList.remove('active-mod1')
  }

  return (
    <>
    <button className="botaoPopup" onClick={toggleModal}>Fale Conosco</button>
    {modal && (
      <div className="modal">
      <div className="overlay" onClick={toggleModal}>
        <div className="model-content">
        <h1 className="h1">Fale conosco</h1>
            <ul className="ulPopup">
            <a href="https://api.whatsapp.com/send?phone=5521992002356&text=Ol%C3%A1.%20"><dt className='botaoContato'>Whatsapp</dt></a>
            <a href="https://www.snapchat.com/add/ostanleyandrade?share_className=x5FBri0NBkY&locale=pt-BR"><dt className='botaoContato'>Snapchat</dt></a>
            <a href="https://www.facebook.com/Stan-App-110019411405713"><dt className='botaoContato'>Facebook</dt></a>
            <a href="https://t.me/stanley_andrade"><dt className='botaoContato'>Telegram</dt></a>
            <a href="https://www.instagram.com/buildev_/"><dt className='botaoContato'>Instagram</dt></a>
            </ul>
            <a href="tel:+55021992002356"><h5 className="h1">(21)99200-2356</h5></a>
            <a href="mailto:atendimento@stanapp.com.br"><h5 className="h1">atendimento@stanapp.com.br</h5></a>
        <button className="botaofecharPopup" onClick={toggleModal}>Fechar</button>
        </div>
        </div>
    </div>
    )}
    
    </>
  )

}

