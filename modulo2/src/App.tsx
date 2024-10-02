function App() {

  function comprar() {
    alert('Comprar o produto')
  }

  function digitou() {
    alert('digitou')
  }

  return (
    <>
      <button onClick={() => {comprar()}}>
        COMPRAR
      </button>
      <br />
      <input type="text" onChange={() => {digitou()}}/>
    </>
  );
}

export default App;
