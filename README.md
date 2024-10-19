# Nombre del Proyecto: Path of the Norns

## Introducción

**Path of the Norns** es una aplicación web de e-commerce para el curso de React de **CODERHOUSE** diseñada para proporcionar una experiencia de compra fluida para usuarios interesados en productos esotéricos en formato SPA (Single Page Application). La aplicación cuenta con una interfaz amigable que permite a los usuarios navegar a través de un catálogo de artículos, agregarlos a un carrito de compras y proceder al pago. El enfoque de este proyecto es combinar tecnologías web modernas para crear una plataforma intuitiva y visualmente atractiva.

## Tecnologías Utilizadas

- **Vite**: Una herramienta de construcción y servidor de desarrollo rápida que permite una configuración y desarrollo ágil de aplicaciones web modernas. Vite proporciona una experiencia de desarrollo eficiente con reemplazo de módulos en caliente (HMR), lo que lo hace ideal para construir aplicaciones en React.

- **Firebase**: Una solución de base de datos en la nube que ofrece sincronización de datos en tiempo real y escalabilidad fácil. Firebase se utiliza como el backend de esta aplicación, permitiendo una gestión y almacenamiento eficiente de los pedidos de los usuarios y los detalles de los productos.

- **Yarn**: Un gestor de paquetes que ofrece una instalación de dependencias más rápida en comparación con npm. Los beneficios de Yarn incluyen un mejor rendimiento, un proceso de instalación de paquetes más seguro y la capacidad de bloquear dependencias a versiones específicas. Por esto es que lo elegi sobre npm.

## Dependencias

Las siguientes dependencias se han incluido en este proyecto:

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario. Permite la creación de componentes de UI reutilizables, facilitando la gestión del estado y el renderizado de la aplicación.

- **React Router DOM**: Una biblioteca para la navegación en aplicaciones React. Permite la navegación entre diferentes vistas, haciendo que la aplicación sea más dinámica y responsiva a las interacciones del usuario.

- **@mui/material**: Material-UI es un popular framework de UI para React que proporciona componentes pre-diseñados siguiendo las pautas de diseño de Material de Google. Mejora la estética de la aplicación y asegura una experiencia de usuario consistente. Pense que seria una buena opcion para probar e integrar a mi proyecto ademas de ganar conocimientos en un framework que no habia utilizado y que quizas tenia componentes adaptables para una web tipo e-commerce.

- **SweetAlert2**: Una biblioteca para mostrar mensajes de alerta personalizables. Utilizo SweetAlert para mostrar mensajes relevantes para el usuario, tanto de error como de confirmacion a la hora de finalizar su compra.

- **Firebase SDK**: El SDK de Firebase se utiliza para interactuar con el backend de Firebase.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

src/ 
├── components/  # Componentes reutilizables
├── context/ # API de Context para gestión de estado global 
├── views/ # Componentes de página (Inicio, Catálogo, Checkout) 
├── services/ # Servicios para interactuar con Firebase 
└── App.jsx # Componente principal de la aplicación


## Características

- **Catálogo de Productos**: Los usuarios pueden navegar a través de una variedad de productos esotéricos.
- **Carrito de Compras**: Los usuarios pueden agregar artículos a su carrito y gestionar sus selecciones.
- **Proceso de Pago**: Un proceso de pago simple e intuitivo donde los usuarios pueden ingresar sus datos y confirmar su pedido.
- **Confirmación de Pedido**: Notificaciones de SweetAlert2 para informar a los usuarios sobre transacciones exitosas.

## Conclusión

Este proyecto muestra el uso de tecnologías web modernas para crear una plataforma de comercio electrónico atractiva y funcional. La elección de Vite y Firebase asegura una aplicación rápida, escalable y confiable. El uso de dependencias adicionales, como Material-UI y SweetAlert2, mejora la experiencia del usuario y permite un producto más pulido.

Proyecto aun en proceso de mejora. Se iran agregando funcionalidades.