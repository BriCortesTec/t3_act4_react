import { useState } from "react";
import Saludo from "./components/Saludo";
import Tarea from "./components/Tarea";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Ver el curso de React", completada: true },
    { id: 2, texto: "Hacer la actividad", completada: false },
  ]);
  const [nueva, setNueva] = useState("");
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  const agregar = () => {
    if (nueva.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), texto: nueva, completada: false }]);
    setNueva("");
  };

  const toggle = (id) =>
    setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)));

  const eliminar = (id) => setTareas(tareas.filter((t) => t.id !== id));

  const visibles = mostrarCompletadas ? tareas : tareas.filter((t) => !t.completada);

  return (
    <div className="app">
      <Saludo />

      <div className="form">
        <input
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregar()}
          placeholder="Escribe una tarea..."
        />
        <button onClick={agregar}>Agregar</button>
      </div>

      <button onClick={() => setMostrarCompletadas(!mostrarCompletadas)}>
        {mostrarCompletadas ? "Ocultar completadas" : "Mostrar completadas"}
      </button>

      <p>Pendientes: {tareas.filter((t) => !t.completada).length}</p>

      {visibles.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <ul>
          {visibles.map((t) => (
            <Tarea
              key={t.id}
              texto={t.texto}
              completada={t.completada}
              onToggle={() => toggle(t.id)}
              onEliminar={() => eliminar(t.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;
