import { useNavigate } from 'react-router-dom'
import '../App.jsx'
import Popup from '../main/popup.js';
import Linkcheckout from '../main/checkoutecommerce.js';
import { render } from '@testing-library/react';


function Home (){
    let navigate = useNavigate();
    return (
      <div className="App">
        {/*Header*/}
        <header className="menutopo">
          <div className="menulogo">
            <img src="/image/logo.png" id='logo'></img>
          </div>
          <ul className='nav-list'>
            <a href='https://api.whatsapp.com/send?phone=5521992002356&text=Ol%C3%A1.%20' className="Botaologin"><img src='image/whatsapp.png' className='iconezap2'></img><dt className='itemlista'>Fale Conosco</dt></a>
          </ul>
        </header>

        {/*Abaixo do Header*/}
        <main className='nomeladodalogo'>
          <aside>
          <h1 className='h1home'><span>Site para Empresa</span></h1>
              <h2 className='abaixoh1'>Site Ecommerce</h2>
              <p>Suporte 24h. Parcele em até 12x.
              Domínio e Hospedagem grátis no 1º ano. 
              Site pronto em até 7 dias. </p>
        
              <br></br>
              <Popup/>
          </aside>
          <article>
              <img src="/image/woman.png" alt="woman"></img>
          </article>
        </main>

        {/*Conteúdo*/}
        <main className='mainConteudo'>
          <div className='divConteudo'>
          <h2 className='textconteudo1'>Sites para qualquer negócio</h2>
          <h3 className='textconteudo2'>Consiga mais clientes integrando o site com:<br></br> 
          Whatsapp, Telegram, Facebook, Instagram e Snapchat</h3>
          <br></br>          
          <img src='/image/siteexemplo.png' alt='siteexemplo' className='imgcatalogo'></img>
          </div>

        </main>
  
        {/*Produtos*/}
        <main className='mainproduto'>
              <div className='clientes'>
               <h3>Nossos Clientes</h3>
               <a href='https://americapharma.com.br/' className='sitecliente'>www.americapharma.com.br</a> <br></br>
               <a href='https://acotaengenharia.com/' className='sitecliente'>www.acotaengenharia.com</a><br></br>
               <a href='https://nslwinstalacoesereformas.com.br/' className='sitecliente'>www.nslwinstalacoesereformas.com.br</a><br></br>
               <a href='https://aguiatransporte.com/' className='sitecliente'>www.aguiatransporte.com</a><br></br>
               <a href='https://trueentretenimento.com.br/' className='sitecliente'>www.trueentretenimento.com.br</a> <br></br>
               <a href='https://serralheriaprosperidade.com/' className='sitecliente'>www.serralheriaprosperidade.com.br</a>
              </div>
            
        </main>
  
  
        {/*Body*/}
        <body>

          {/* PriceTable*/}
          <div className='tituloPricetable'><h3>Preços</h3></div>

          {/*Container com os 2 PriceTable*/}
          <div className='flexContainerPricetable'>

            {/*PriceTable 1*/}
            <div className='priceTable1'>
              <ul className='ulPricetable'>
                <div className='priceBackground'>
                  <li className='name'>Ecommerce</li>
                  <li className='textoextra'>Em até 12x no cartão</li>
                  <li className='textoextra'>Pague com Pix ou Boleto</li>
                  <li className='priceTag'>532,50</li>
                </div>
                <div className='info'>
                <li><img src='image/checked.png' className='listitem'></img>Painel de Produtos e Estoque</li>
                <li><img src='image/checked.png' className='listitem'></img>Plugin de Transportadoras para calculo de frete</li>
                <li><img src='image/checked.png' className='listitem'></img>Domínio Grátis (De: R$34,99 por R$0,00)</li>
                <li><img src='image/checked.png' className='listitem'></img>Hospedagem Grátis</li>
                <li><img src='image/checked.png' className='listitem'></img>100 subdomínios Grátis</li>
                <li><img src='image/checked.png' className='listitem'></img>100GB de Armazenamento SSD compartilhado </li>
                <li><img src='image/checked.png' className='listitem'></img>100 contas de E-mail profissional Grátis</li>
                <li><img src='image/checked.png' className='listitem'></img>SSL Grátis (De: R$65,99 por R$0,00)</li>
                <li><img src='image/checked.png' className='listitem'></img>Largura de Banda Ilimitada</li>
                <li><img src='image/checked.png' className='listitem'></img>WordPress Gerenciado</li>
                <li><img src='image/checked.png' className='listitem'></img>Aceleração Wordpress</li>
                <li><img src='image/checked.png' className='listitem'></img>Banco de Dados Ilimitado</li>
                <li><img src='image/checked.png' className='listitem'></img>Backups semanais</li>
                <li><img src='image/checked.png' className='listitem'></img>Nameserves do Cloudflare Protegidos</li>
                <li><img src='image/checked.png' className='listitem'></img>Suporte 24 horas, 7 dias por semana</li>
                <li><img src='image/checked.png' className='listitem'></img>99,9% de Uptime Garantido</li>
                <li><img src='image/checked.png' className='listitem'></img>Gerenciador de DNS</li>
                <br></br>
                </div>
              </ul>
              <button className='botaoPriceTable' onClick={() => {navigate("/checkoutEcommerce");this.linkdesite}}>Comprar agora</button>
            </div>

            {/*PriceTable 2*/}
            <div className='priceTable2'>
              <ul className='ulPricetable'>
                <div className='priceBackground'>
                  <li className='name'>Site</li>
                  <li className='textoextra'>Em até 12x no cartão</li>
                  <li className='textoextra'>Pague com Pix ou Boleto</li>
                  <li className='priceTag'>322,50</li>
                
                </div>
                <div className='info'>
                <li><img src='image/checked.png' className='listitem'></img>Domínio Grátis (De: R$34,99 por R$0,00)</li>
                <li><img src='image/checked.png' className='listitem'></img>Hospedagem Grátis</li>
                <li><img src='image/checked.png' className='listitem'></img>100 subdomínios Grátis</li>
                <li><img src='image/checked.png' className='listitem'></img>100GB de Armazenamento SSD compartilhado </li>
                <li><img src='image/checked.png' className='listitem'></img>100 contas de E-mail profissional Grátis</li>
                <li><img src='image/checked.png' className='listitem'></img>SSL Grátis (De: R$65,99 por R$0,00)</li>
                <li><img src='image/checked.png' className='listitem'></img>Largura de Banda Ilimitada</li>
                <li><img src='image/checked.png' className='listitem'></img>WordPress Gerenciado</li>
                <li><img src='image/checked.png' className='listitem'></img>Aceleração Wordpress</li>
                <li><img src='image/checked.png' className='listitem'></img>Banco de Dados Ilimitado</li>
                <li><img src='image/checked.png' className='listitem'></img>Backups semanais</li>
                <li><img src='image/checked.png' className='listitem'></img>Nameserves do Cloudflare Protegidos</li>
                <li><img src='image/checked.png' className='listitem'></img>Suporte 24 horas, 7 dias por semana</li>
                <li><img src='image/checked.png' className='listitem'></img>99,9% de Uptime Garantido</li>
                <li><img src='image/checked.png' className='listitem'></img>Gerenciador de DNS</li>
                <br></br>
                <br></br>
                <br></br>
                </div>
              </ul>
              <button className='botaoPriceTable'  onClick={() => {navigate("/checkoutsite");}}>Comprar agora</button>
            </div> 

            {/*PriceTable 3*/}
            <div className='priceTable3'>
              <ul className='ulPricetable'>
                <div className='priceBackground'>
                  <li className='name'>Outros Serviços</li>
                  <li className='textoextra'>Variedade para sua empresa</li>
                  <li className='textoextra'>A partir de</li>
                  <li className='priceTag'>10,00</li>
                
                </div>
                <div className='info'>
                <li className='lista'><img src='image/checked.png' className='listitem'></img>Logo - R$20</li>
                <li><img src='image/checked.png' className='listitem'></img>Post, Reels, Stories (foto) - R$10</li>
                <li><img src='image/checked.png' className='listitem'></img>Post, Reels, Stories (video) - R$40</li>
                <li><img src='image/checked.png' className='listitem'></img>Video com narração - R$50 </li>
                <li><img src='image/checked.png' className='listitem'></img>Gestão de Tráfego (Facebook/Instagram) - R$300/mês</li>
                <li><img src='image/checked.png' className='listitem'></img>Assistente Virtual - R$15,30/hora</li>
               
                <br></br>
                <br></br>
                <br></br>
                </div>
              </ul>
              <a href='https://api.whatsapp.com/send?phone=5521992002356&text=Ol%C3%A1.%20'><button className='botaoPriceTable'><img src='image/whatsapp.png' className='iconezap'></img>Fale conosco</button></a>

            </div> 

          </div>
        </body>
        {/*Contato*/}
        <div className='contato'>
          <ul className='ulcontato'>
          <h3>Fale conosco</h3>
            <a href="tel:+55021992002356"><dt id='itemlistacontato'>Ligue agora</dt></a>
            <a href="https://api.whatsapp.com/send?phone=5521992002356&text=Ol%C3%A1.%20"><dt id='itemlistacontato'>Whatsapp</dt></a>
            <a href="https://www.snapchat.com/add/ostanleyandrade?share_id=x5FBri0NBkY&locale=pt-BR"><dt id='itemlistacontato'>Snapchat</dt></a>
            <a href="https://www.facebook.com/Stan-App-110019411405713"><dt id='itemlistacontato'>Facebook</dt></a>
            <a href="https://t.me/stanley_andrade"><dt id='itemlistacontato'>Telegram</dt></a>
            <a href="https://www.instagram.com/stanapp_/"><dt id='itemlistacontato'>Instagram</dt></a>
          </ul>
        </div>
      </div>
    )
  }

  export default Home;

  
