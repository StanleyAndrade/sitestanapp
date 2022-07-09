import React, { Component } from "react";

class CheckoutEcommerce extends Component {
    constructor (props){
        super (props)
        this.state = {
            dados: "https://mpago.la/1FLs3Sr"
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
                <h5>Qual setor a sua empresa atua?</h5>
                <main className="mainCheckout">
                    <aside className="asideCheckout">
                      <div>
                          <input type={"text"} id="setor" name="$Setor" placeholder="Ex.: Varejo, Vestuário..."></input>
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

export default CheckoutEcommerce;

