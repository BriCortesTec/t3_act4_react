# t3_act4_react

Mini aplicación de **lista de tareas** hecha con React + Vite. Permite agregar tareas,
marcarlas como completadas, eliminarlas y ocultar/mostrar las completadas.

## Componentes
- `Saludo`: componente funcional simple (título).
- `Tarea`: componente que recibe props (`texto`, `completada`, `onToggle`, `onEliminar`).
- `App`: maneja el estado con `useState` y renderiza la lista con `.map()` y `key`.

## Cómo correrlo
```bash
npm install
npm run dev
```

## Preguntas

**a) ¿Qué diferencia hay entre props y state en React?**
Las props son datos que un componente padre le pasa a un hijo; el hijo solo las lee y no puede modificarlas. El state son datos que pertenecen al propio componente y que pueden cambiar con el tiempo; cuando el state cambia, React vuelve a renderizar el componente. En resumen: las props vienen de afuera y el state se maneja desde adentro.

**b) ¿Por qué es importante usar una key al renderizar una lista de elementos?**
Porque la key le permite a React identificar cada elemento de forma única. Así, cuando la lista cambia (se agrega, elimina o reordena algo), React sabe exactamente qué elementos cambiaron y solo actualiza esos, en lugar de re-renderizar todo o mezclar elementos por error. Sin keys puede haber bugs y peor rendimiento. Por eso uso un `id` único y no el índice.

**c) Explica con tus propias palabras qué hace useState y da un ejemplo de dónde lo usaste.**
`useState` es un Hook que permite que un componente funcional "recuerde" un valor entre renderizados. Devuelve un arreglo con el valor actual y una función para modificarlo; al llamar esa función, React vuelve a dibujar el componente con el nuevo valor. En mi app lo uso en `const [tareas, setTareas] = useState([...])` para guardar la lista de tareas, y también en `nueva` (el texto del input) y `mostrarCompletadas` (el botón para ocultar/mostrar tareas completadas).

**d) Enlace del repositorio de GitHub:**
https://github.com/BriCortesTec/t3_act4_react

**e) Enlace del proyecto desplegado en GitHub Pages:**
https://BriCortesTec.github.io/t3_act4_react/
