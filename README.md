# Flama CSS

Librería de componentes UI basada en **Custom Elements y atributos
semánticos**. Diseñada para construir interfaces consistentes, modulares
y declarativas sin dependencia de framework.

------------------------------------------------------------------------

## 📦 Instalación

### CSS directo

``` html
<link rel="stylesheet" href="dist/flama.css">
```

### NPM

``` bash
npm install flama-css
```

``` js
import 'flama-css/dist/flama.css'
```

------------------------------------------------------------------------

## 🎨 Iconos disponibles

calendar, download, lock, down, left-small\
cog, email, trash, left, right-small\
delete, eye-no, update, right, chevron-down\
dots, eye, user, up-small\
docs, filter, up, down-small

Uso:

``` html
<fl-icon icon="calendar"></fl-icon>
```

------------------------------------------------------------------------

# 🧩 Componentes

## fl-icon

Renderiza un icono disponible.

**Propiedades** - `icon`: Uno de los iconos disponibles

------------------------------------------------------------------------

## fl-tip

Barra de mensaje del sistema.

**Propiedades** - `visible` - `type`: error \| correct \| warn \| info

------------------------------------------------------------------------

## fl-body \| \[fl-body\]

Contenedor principal de la aplicación.

**Propiedades** - `compact`

------------------------------------------------------------------------

## fl-input

Contenedor estilizado para input o select.

⚠ El input interno debe definir `placeholder`.

**Propiedades** - `icon` - `compact` - `disabled` - `error`

### Subcomponentes

#### fl-visibility

Toggle mostrar/ocultar password.

#### fl-clear

Limpia el input. Visible solo si tiene contenido.

#### fl-select

Interfaz visual para select.

**Propiedades** - `tabindex="1"` (si tiene fl-dropbutton posterior)

------------------------------------------------------------------------

## fl-button \| button\[flama\] \| a\[flama\]

Botón estilizado.

**Propiedades** - `small` - `compact` - `pill` - `left` - `right` -
`clear` - `primary` - `outline` - `disabled`

------------------------------------------------------------------------

## fl-buttons

Contenedor de botones.

**Propiedades** - `center` - `separate` - `vertical`

------------------------------------------------------------------------

## fl-action

Botón circular con icono. Puede mostrar `fl-list` flotante.

**Propiedades** - `icon` - `disabled` - `right` - `left` - `up` -
`main` - `badge` - `avatar` - `tabindex="1"`

------------------------------------------------------------------------

## fl-list / fl-item

Lista estructural.

**fl-item** - `selected`

------------------------------------------------------------------------

## fl-dropdown

Lista desplegable dentro de fl-input.

**Propiedades** - `visible`

------------------------------------------------------------------------

## fl-paginator

### fl-paginator-move

-   `disabled`

### fl-pages

#### fl-page

-   `disabled`
-   `current`

------------------------------------------------------------------------

## fl-checks

Agrupa checks.

## fl-check

Checkbox o radio.

**Propiedades** - `disabled`

------------------------------------------------------------------------

## fl-dropbutton

Botón con menú hover.

**Propiedades** - `tabindex="1"`

------------------------------------------------------------------------

## fl-nav / fl-nav-item

Menú desplegable.

**fl-nav** - `visible` - `headed`

**fl-nav-item** - `indicator` - `type: item | button`

------------------------------------------------------------------------

## fl-getnet

Icono Getnet.

**Propiedades** - `size: small | big`

------------------------------------------------------------------------

## fl-title

Título principal.

**Propiedades** - `clear`

------------------------------------------------------------------------

## fl-loader

Spinner global.

**Propiedades** - `message`

------------------------------------------------------------------------

## fl-modal

Ventana modal. Debe contener fl-card.

**Propiedades** - `visible`

------------------------------------------------------------------------

## fl-card

Tarjeta modular.

**Propiedades** - `align: left | right`

Subcomponentes: - fl-card-body - fl-card-title - fl-card-message -
fl-card-description

------------------------------------------------------------------------

## fl-tag

Tag visual.

**Propiedades** - `type: active | inactive | admin | local`

------------------------------------------------------------------------

## fl-menu

Menú principal.

Subcomponentes: - fl-menu-nav - fl-menu-item (`selected`, `indicator`)

------------------------------------------------------------------------

## fl-breadcrumbs

Migas de pan.

Hijos pueden usar: - `back`

------------------------------------------------------------------------

## fl-sections / fl-section

Agrupación estructural.

**fl-section** - `title` - `clear` - `compact`

------------------------------------------------------------------------

## fl-data

Dato simple.

**Propiedades** - `money` -
`method: app | cash | mastercard | qr | visa` - `inline`

Subcomponente: - fl-data-type

------------------------------------------------------------------------

## fl-payment

Icono método de pago.

**Propiedades** - `method: app | cash | mastercard | qr | visa`

------------------------------------------------------------------------

## table\[flama\]

Tabla estilizada.

**Propiedades** - `compact`

------------------------------------------------------------------------

## fl-row / fl-cel

Sistema simple de filas.

**fl-row** - `center`

------------------------------------------------------------------------

# 📄 Licencia

MIT
