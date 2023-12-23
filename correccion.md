# Examenes

## 1er Trimestre

### BBDD

Teoria: 8/12, pequeños fallos en detalles muy concretos donde casi todos habeis caido, muy bien en general.

Practica: 8/10, está **muy** bien, pero se te ha ido la olla! El localStorage no funciona en local, es una tontería, pero estás cargando tu `script.js` en el head antes que el `index.html` este cargado por completo, por lo que no puede encontrar el contenedor donde quieres añadir los elementos, esto se ve corregido en codepen porque el script se carga en el body, pero en local no funciona.

Con mover tu carga del archivo a tu body, funciona perfectamente.

Por lo demás la página funciona correctamente, y visualmente esta muy bien! Con un pequeño margin o padding en tu contenedor de participantes, y quizá una tamaño de fuente un poco mas grande ganaría en claridad.

Muy buena estructura de html, css quirúrgico (me ha gustado mucho) y js muy claro.

Documentación:

Explicación clara del proceso, bien!

Eso si, que sepas que puedes añadir *cualquier* código en markdown, no solo js:

```html
<div class="container">
    <input type="text" id="valor" placeholder="Introduce un nombre">
    <button onclick="añadir()">Añadir</button>
    <button onclick="sorteo()">Sortear</button>
    <button onclick="borrar()">Borrar</button>
    <div class="resultados"></div>
</div>
```

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Esto hace que compartir codigo en documentacion sea mucho mas comodo y facil, explicar como funciona una app asi es mucho mas sencillo!

Nota: 8