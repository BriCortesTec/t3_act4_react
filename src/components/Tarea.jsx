function Tarea({ texto, completada, onToggle, onEliminar }) {
  return (
    <li className={completada ? "tarea hecha" : "tarea"}>
      <span onClick={onToggle}>{texto}</span>
      <button onClick={onEliminar}>Eliminar</button>
    </li>
  );
}
export default Tarea;
