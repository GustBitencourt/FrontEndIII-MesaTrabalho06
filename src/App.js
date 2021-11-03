import ClasseComponent from './components/ClasseComponent';
import FunctionComponent from './components/FunctionComponent';
import './App.css';

function App() {
  
  return (
    <div className="container">
      <div className="container-lista">
        <h3>Convidado:</h3>
        <ClasseComponent nome="Nicolas" estaNaLista={true} />
        <ClasseComponent nome="Pedro" estaNaLista={false} />
        <ClasseComponent nome="Carolina" estaNaLista={true} />
        <h3>Tarefas: </h3>
        <FunctionComponent nome="Nicolas" tarefa="batata-frita" />
        <FunctionComponent nome="Pedro" tarefa="pizza" />
        <FunctionComponent nome="Carolina" tarefa="bebidas" />
      </div>
    </div>
  );
}

export default App;
