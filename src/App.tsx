import { Card } from './components/Card';
import { Header } from './components/Header'

function App() {

  return (  
  <body>
    <Header />  
    <main>
      <section className="product">
        <div className="container">
          <h1 className="main-title">GRAFIX</h1>
          <h2>Gerenciando suas relações com clientes</h2>
          <p>
            O CRM é uma ferramenta essencial para gerenciar seus clientes de
            forma eficiente, aumentar suas vendas e melhorar o relacionamento
            com seus clientes. Com o CRM você pode gerenciar contatos, leads,
            oportunidades, negócios e muito mais.  
          </p>
          <div id="slider">
            <img className="selected" src="./src/images/perfil-roxo2.png" alt="Image1"></img>
            <img src="./src/images/menu-roxo2.png" alt="Image2"></img>
            <img src="./src/images/menu-roxo4.png" alt="Image3"></img>
            <img src="./src/images/pag 3-roxo2.png" alt="Image4"></img>
          </div>

          <a href="" className="btn-primary">Experimente agora</a>
          
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Recursos do CRM</h2>
          <ul>
            <li><i className="features1"></i> Gerenciamento de contatos</li>
            <li><i className="features2"></i> Geração de leads</li>
            <li><i className="features3"></i> Análise de oportunidades</li>
            <li><i className="features4"></i> Acompanhamento de negócios</li>
          </ul>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2>Planos do CRM</h2>
          <div className="pricing-table">
            <Card 
            flat="Experimente Gratuitamente"
            for="Para pequenas empresas"
            price="R$0,00 por 15 dias"
            advantage1 = "Gerenciamento de contatos"
            advantage2 = "Geração de leads"
            advantage3 = "Análise de oportunidades"
            advantage4 = "Acompanhamento de negócios"
            />
            <Card 
            flat="Plano Avançado"
            for="Para médias empresas"
            price="R$ 49,99/mês"
            advantage1 = "Gerenciamento de contatos"
            advantage2 = "Geração de leads"
            advantage3 = "Análise de oportunidades"
            advantage4 = "Acompanhamento de negócios"
            advantage5 = "Relatórios personalizados"
            />
            <Card 
            flat="Plano Corporativo"
            for="Para grandes empresas"
            price="R$ 99,99/mês"
            advantage1 = "Gerenciamento de contatos"
            advantage2 = "Geração de leads"
            advantage3 = "Análise de oportunidades"
            advantage4 = "Acompanhamento de negócios"
            advantage5 = "Relatórios personalizados"
            advantage6 = "Integração com outros sistemas"
            />
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <h2>Entre em contato conosco</h2>
          <form action="#">
            <input type="text" placeholder="Nome completo" required />
            <input type="email" placeholder="E-mail" required />
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit" className="btn-primary">Enviar</button>
          </form>
        </div>
      </section>
    </main>
  </body>
  );
}

export default App;
