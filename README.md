# svelte-app

Proyecto base de webapp con Svelte creado utilizando [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Requisitos previos

### Gestor de paquetes (PNPM)

Para poder lanzar el proyecto, el primer paso es tener instalado el gestor de paquetes de Node.js **```pnpm```**.

**Windows:**

```
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

**Linux:**

```
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Para otros sistemas operativos, puedes consultar [aquí](https://pnpm.io/es/installation) más opciones.

Lo utilizaremos en lugar de npm porque se puede instalar directamente en Windows y permite gestionar las versiones de Node.


### Instalación de Node y dependencias

Ejecutaremos el siguiente comando en la raíz del repositorio. 

```
pnpm install
```

Esto instalará la versión específica de Node que utiliza el proyecto (especificada en el fichero ```.npmrc```) y las dependencias indicadas en ```package.json``` y ```pnpm-lock.yaml```, generando la carpeta ```node_modules```.

Esta carpeta, junto a otros ficheros, es ignorada en los commits al repositorio, puesto que es muy pesada y contiene paquetes de terceros. Utilizando el comando ya indicado (```pnpm install```) todos podremos reconstruir el mismo entorno de desarrollo (con la misma versión de Node y las mismas dependencias, con las mismas versiones).


## Lanzar el servidor de desarrollo

Simplemente tendremos que lanzar el siguiente comando (¡El doble ```--``` no es una errata!):

```
npm run dev -- --open
```

Esto iniciará el servidor de desarrollo y abrirá la pantalla principal del proyecto en una nueva pestaña de navegador.

Si todo ha funcionado correctamente, los cambios que hagamos y guardemos en los ficheros del proyecto (las páginas y componentes que se encuentran en ```src```) se reflejarán inmediatamente de forma automática en la vista de navegador.


## Creación de una versión de producción

Para crear una versión de producción, es necesario utilizar el comando ```npm run build```.

Se puede lanzar una previsualización de la versión de producción con `npm run preview`.

*Información adicional incluida en la documentación:*
> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


