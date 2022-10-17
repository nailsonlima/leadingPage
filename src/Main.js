function Main(){
    return(
        <div className="main">
          <div className="center">
            <div className="menu">
                <div className="Logo">
                  <h3>Danki.code</h3>
                </div>
                <div className="item-menu">
                    <a href="#">Login</a>
                </div>
            </div>
            <div className='form'>
            <h2>Entre em Contato!</h2>
              <form>  
                <div className='items-form'>
                  <input placeholder='Seu nome' type="text"/>
                  <input placeholder='Seu número' type="text"/>
                  <input placeholder='Sexo' type="text"/>
                  <input placeholder='País' type="text"/>
                  <input type="submit"/>
                </div>
              </form>
            </div>


          </div>
      </div>
    )
}
export default Main;