import React, { Component } from "react";

class CheckoutPage extends Component {
    constructor (props){
        super (props)
        this.state = {
            dados: "https://mpago.la/25uVEyG"
        }
    }

    linkdesite = () => {
        this.setState({
       
        })
    }

    linkdepagina = () => {
        this.setState({
      
        })
    }

    render () {
        return(
            <div className="divPai">
            <fieldset className="fieldsetCheckout">
            <form className="formularioCheckout" action="https://api.staticforms.xyz/submit" method="POST">
                <input className="inputCheckout" type="hidden" name="accessKey" value="875d7b35-9a89-464d-9fd5-a95cd97a884a"></input>
                <input className="inputCheckout" type={"text"} name="name" placeholder="Nome Completo" required></input>
                <input className="inputCheckout" type={"number"} name="phone" placeholder="Tel: (DDD) 00000-0000" required></input>
                <input className="inputCheckout" type={"number"} name="phone" placeholder="Tel: (DDD) 00000-0000 (Opcional)"></input>
                <input className="inputCheckout" type={"email"} name="email" placeholder="Email" required></input>
                <input className="inputCheckout" type={"text"} name="$Nome da Empresa" placeholder="Nome da empresa (se tiver)"></input>
                <input className="inputCheckout" type="hidden" name="redirectTo" value={this.state.dados}></input>
                <h5>Preencha abaixo com o seu link de afiliado</h5>
                <main className="mainCheckout">
                    <aside className="asideCheckout">
                      <div>
                      <div>
                          <input type={"text"} id="setor" name="$Setor" placeholder="Cole aqui o seu link de afiliado"></input>
                      </div>
                      </div>
                    </aside>

                    <article className="articleCheckout">
                      <div><br></br></div>
                    </article>
                </main>                
                <input className="botaosubmit" type={"submit"} value="Enviar" />
            </form>
            </fieldset>
        </div>
        )
        
    }
}

export default CheckoutPage;

