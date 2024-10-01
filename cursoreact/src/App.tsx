import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import Autor from "./components/Autor";
import Conteudo from "./components/Conteudo";

function App() {
  return (
    <div>
      <Titulo />
      <Subtitulo />
      <Autor name="Ana" lastname="Cardoso"/>

      <hr />

      <Conteudo />
    </div>
  );
}

export default App;
