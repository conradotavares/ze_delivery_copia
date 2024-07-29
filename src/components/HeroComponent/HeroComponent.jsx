import "./HeroComponent.css";
function HeroComponent() {
  return (
    <>
      <div className="content">
        <div className="welcomeHeader">
          <h1 className="welcomeHeader-h1">
            Bebida rápida, gelada e no precinho? O Zé entrega tudo.
          </h1>
          <input
            className="home-input"
            placeholder="Inserir endereço para ver preço"
          ></input>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;