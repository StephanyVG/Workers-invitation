# Zipmi Design System & Layout Standards

Documento de estándares de diseño e interfaz para la aplicación **Zipmi Workers PWA**.

---

## 1. Patrón General de Layout y Padding

- **Color de Fondo Global (Global Background)**:
  - El fondo de toda la aplicación y de cada pantalla debe ser estrictamente **`#F5F5F5`** (`bg-[#f5f5f5]`).

- **Padding del Contenedor Padre**:
  - **Laterales (Izquierda y Derecha)**: **`24px`** (`px-[24px]`).
  - **Verticales (Arriba y Abajo)**: **`32px`** (`py-[32px]`).
  - *Regla*: Todo el contenido de la pantalla debe extenderse a lo ancho (`w-full`), teniendo como tope strictly estos 24px de padding lateral y 32px de padding superior e inferior.

- **Separación de Encabezados / Botón de Regresar**:
  - La distancia vertical desde el contenedor del botón de regresar (`arrow_back`) o header superior hacia el contenido principal debe ser de exactamente **`32px`** (`mb-[32px]`).

---

## 2. Iconografía

- **Google Material Design Icons Exclusivos**:
  - Usar únicamente la librería Google Material Symbols (`material-symbols-outlined`).
  - Queda prohibido el uso de iconos de `lucide-react` o fuentes alternativas en botones, navegación y campos de entrada.
  - Para iconos de selección activa, utilizar la variación rellena (`.icon-filled` / `font-variation-settings: 'FILL' 1`).

---

## 3. Estándar de Controles y Formulario

- **Inputs / Campos de Texto**:
  - **Alto (Height)**: **`44px`** (`min-h-[44px]`).
  - **Bordes Redondeados (Border Radius)**: **`8px`** (`rounded-[8px]`).
  - **Padding Interno**: **`12px` lateral** (`px-[12px]`) y **`10px` vertical** (`py-[10px]`).
  - **Etiquetas (Labels)**: **`14px`**, peso medio (`font-medium`) en tipografía **Inter**.
  - **Inputs de Fecha**: Icono nativo del navegador oculto (`input[type="date"]::-webkit-calendar-picker-indicator { display: none; }`). El icono de Material Design `calendar_today` activa `showPicker()`.

- **Checkboxes**:
  - Cuando están seleccionados, deben tener un relleno de color azul **`#0038d0`** con el icono de check blanco (`check`) al centro.
  - Cuando están deseleccionados, muestran un borde neutro con fondo gris claro.

---

## 4. Comportamiento e Interacciones (PWA / App Nativa)

- **Sin Estados Hover (`hover:`)**:
  - Al tratarse de una PWA / aplicación móvil táctil, **no deben utilizarse efectos `:hover`** en botones, tarjetas o navegación.
  - La retroalimentación táctil debe realizarse mediante estados activos de presión (`active:scale-[0.98]`, `active:bg-...` o `active:opacity-80`).

- **Barra de Navegación Fija**:
  - La barra de navegación inferior (`Navbar`, nodo Figma `1997:39906`) y las barras de encabezado principales deben mantenerse **fijas** (`fixed` / `sticky`), evitando que hagan scroll con el contenido.
  - El elemento activo en la barra inferior utiliza la cápsula redondeada azul claro (`bg-[#c2e7ff]`), texto `#0045ff` y el icono de Material Design relleno.

---

## 5. Estándares de Tipografía para Títulos de Pantalla

- **Pantallas Iniciales (Previas y durante el Bot)**:
  - Títulos principales: **28px bold** (`font-['DM_Sans',sans-serif] font-bold text-[28px] leading-[36px]`).
  - Títulos de sección/preguntas sobre opciones: **18px bold** (`font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[24px]`).
  - Descripciones y contenidos en tarjetas/inputs: **16px** (`font-['Inter',sans-serif] font-normal text-[16px] leading-[24px]`).

- **Pantallas Posteriores al Bot (Chat Wizard de Elegibilidad)**:
  - Todos los títulos principales de pantalla después del bot deben ser de exactamente **24px en semibold** (`font-['DM_Sans',sans-serif] font-semibold text-[24px] leading-[32px]`).
