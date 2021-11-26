# Hola, bienvenido a nuestro proyecto!

Somos el  **Grupo 10 - Equipo 6** de la Mision TIC 2022 de la Universidad del Norte y a continuación te vamos a contar en qué consiste nuestro proyecto.


## Plataforma Gestión de Campeonatos

La agrupación  Liga juvenil de Riohacha se encarga de realizar campeonatos de Curling. Últimamente han tenido varios cambios de manager, por lo que las herramientas que han venido usando para agendar y gestionar estos campeonatos han variado mucho y la información no se encuentra centralizada. Motivo por el cual nos contactan para construir una plataforma para la gestión de campeonatos de Curling.

Los tipos de usuarios que maneja el sistema son administrador, usuario externo y usuario interno.

### Un usuario interno está en la capacidad de:

- Crear un campeonato indicando lugar, fecha, número de equipos, y premio de los primeros dos lugares.

- Modificar el estado de un campeonato (Aceptando inscripciones, inscripciones cerradas, en proceso, terminado).

- Cancelar un campeonato.

- Aceptar/Aprobar el registro de un equipo a un campeonato. Solo se puede inscribir mientras se estén aceptando inscripciones.

- Dado un campeonato y un equipo ingresar/actualizar los puntos obtenidos en el campeonato.

- Generar un reporte indicando los campeonatos y el estado de cada uno de ellos.

- Dado un campeonato ver la tabla de posiciones del mismo.

- Crear listado de partidos de un campeonato, basado en los equipos creados para este. Los partidos se realizan entre dos equipos.

- Definir fechas para la realización de los partidos.

- Definir resultados de los partidos creados.


### Un usuario externo debe estar en la capacidad de:

- Registrarse en la plataforma.

- Un usuario puede registrar únicamente un equipo.

- Inscribir un equipo a un campeonato.

- Eliminar un equipo.

- Crear y configurar el equipo (Información de los jugadores: nombre, documento de identificación personal y edad).

- Un jugador solo  puede pertenecer a un equipo en un campeonato, pero puede pertenecer a otro equipo de otro campeonato.

- Retirar la inscripción de un equipo en un campeonato.

- Ver tabla de posiciones de un campeonato.


### Requerimientos adicionales del sistema.

- El sistema genera la tabla de posiciones de un campeonato con base en los puntos registrados por equipo.

Un administrador se encarga de gestionar los usuarios internos y además ejerce control total de la plataforma.


### Notas:

- Los datos suministrados por los usuarios cumplen la política de privacidad de datos vigente, es decir las contraseñas de los usuarios se almacenan de forma cifrada y la conexión al servidor se realiza de forma segura.

- La base de datos es no relacional.

- Se utilizó una arquitectura desacoplada, es decir, una API back end y un front end que consume dicha API.

- La API back end está desarrollada en Express.js

- El front end está desarrollado en React.js

- Se utilizó Bootstrap como librería CSS  para manejar los estilos de la aplicación.