# Task List

Aplicación web que permite guardar y mostrar un listado de tareas o recordatorios. Se pueden añadir nuevas tareas, marcarlas como completadas, cambiar su prioridad y eliminarlas, así como filtrarlas mediante un campo de búsqueda.
Este proyecto ha sido desarrollado con Angular, diviéndolo en componentes para facilitar el reciclaje de código. Las funcionalidades de Angular permiten insertar nuevas tareas, disponerlas en una lista y editarlas dinámicamente.

EN PRODUCCIÓN: https://diegorosadoh.github.io/taskList-Angular/
<hr>

## Añadir tarea
En el primer campo de texto señalado con "New task" se debe introducir un nombre para la nueva tarea. Al pulsar la tecla 'enter' se añadirá a la lista de tareas. En el caso de existir ya una lista en el almacenamiento local del navegador, la vista cargará y añadirá las nuevas tareas a esta lista. En caso de pulsar 'enter' con el campo de texto vacío, el texto indicativo del campo cambiará para avisar que se debe introducir algo para añadir una tarea.
<hr>

## Editar cada elemento
Al poner el ratón encima de cada elemento aparecen nuevos elementos. Se muestran los minutos que han pasado desde que se creó el elemento, así como botones que, junto con hacer click sobre el elemento, permiten editar sus atributos:

#### Completar tarea
Al hacer click sobre un elemento de la lista, este se marcará como completado. El icono delante del nombre cambiará, y este último aparecerá grisáceo y tachado. Volviendo a hacer click se puede desmarcar el elemento.

#### Eliminar tarea
Al poner el ratón encima aparece una 'X' al final del elemento. Haciendo click sobre ella el elemento desaparecerá.

#### Prioridad
Las flechas que aparecen delante del elemento al poner el ratón encima servirán para cambiar su prioridad (Baja, Media, Alta). La lista se ordenará según este atributo. Los elementos nuevos de la lista se crean con prioridad Baja.
<hr>

## Filtrar lista
El menú que aparece en la parte inferior de la lista ofrece información como el total de tareas de la lista, el número de restantes y el tipo de tareas que se están mostrando. A través de este menú podemos filtrar los elementos que queremos mostrar, así como eliminar las tareas ya completadas.

#### Según estado
Con los tres botones centrales, 'All', 'Active', 'Completed', se cambia la vista para mostrar todas las tareas, solo las no completadas o solo las completadas, respectivamnte.

#### Según búsqueda
En el campo de texto inferior indicado como 'Search' se puede introducir una cadena de búsqueda que filtrará los elementos según su nombre coincida con esta. Se puede aplicar este filtro al mismo tiempo que se usa el filtro de estado.

#### Eliminar completadas
Con el botón 'Clear Completed' dispuesto a la derecha del menú se eliminarán todas las tareas de la lista (no de la vista) marcadas como completadas.
