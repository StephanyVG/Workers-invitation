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

---

## 6. Especificación Detallada de Flujos de Onboarding

La aplicación Zipmi Workers PWA cuenta con 2 caminos de entrada claramente delimitados:

### Flujo 1: Tengo un Código de Invitación ("I have an invitation code")
1. **Verificación SMS / Código**: El usuario selecciona "Tengo un código de invitación" e ingresa su código enviado por el empleador.
2. **Términos de Servicio (`TermsOfServiceScreen.tsx`)**:
   - Al aceptar los términos y presionar **Continuar**, se abre el Bottom Sheet "¡Importante! El camino hacia tu visa" (`VisaPathBottomSheet.tsx`).
3. **Navegación Directa a Inicio**:
   - Al presionar **Continuar** en el Bottom Sheet, **redirige DIRECTAMENTE a la pantalla Principal (`HomeView.tsx`)**.
   - **NO requiere ningún modal intermedio ni pasa por la pantalla de "Comencemos", pasos de creación de perfil (1 al 25) ni bot de elegibilidad.**

---

### Flujo 2: Busco Trabajo ("I'm looking for work")
1. **Chat de Elegibilidad y Creación de Perfil**: El usuario selecciona "Busco trabajo", completa el bot de elegibilidad y los pasos 1 a 25 del wizard de información personal ("Comencemos" en adelante).
2. **Finalización de Perfil (`Step25FinalReviewScreen.tsx`)**:
   - Al seleccionar el botón **¡Todo listo!**, se redirige a la vista Principal (`HomeView.tsx`, Nodo Figma `631:28540`).
3. **Pantalla Principal / Empty State (Nodo Figma `631:28540` / `631:28544`)**:
   - Renderiza el contenedor de invitaciones vacías con la ilustración `/BubbleZip.svg`, título **"Esperando ofertas"** y descripción *"Estamos esperando a que las empresas te envíen ofertas de trabajo. Te notificaremos en cuanto recibas una."*.
4. **Secuencia de Modales de Invitación**:
   - **Modal 1 (Nodo Figma `631:28510`)**: Se presenta de forma inmediata sobre la pantalla Principal. Título "¡Perfil listo para revisión!" (`text-[28px] font-bold text-[#0038d0]`) y contenido a `16px`. Botón **OK**.
   - **Transición**: Al presionar **OK**, el Modal 1 se cierra y despliega inmediatamente el **Modal 2 (Nodo Figma `631:28539`)**.
   - **Modal 2 (Nodo Figma `631:28539`)**: Título "¡Tienes ofertas de trabajo!" / "You have job invitations!" (`text-[28px] font-bold text-[#0038d0]`) y contenido a `16px`. Contiene la imagen `/JobCard2.svg` (148px x 164px) perfectamente centrada en la parte superior. Botón **Ver trabajo** / **View job**.
5. **Pantalla de Detalle de Oferta (`JobOfferDetailScreen.tsx`, Nodo Figma `631:28603`)**:
   - Al seleccionar **Ver trabajo**, se redirige a la vista de detalle de oferta (Nodo `631:28603`), con banner superior de la empresa, métricas principales (sueldo, ubicación, fechas), requisitos de visa y botones para Aceptar / Rechazar oferta.

---

## 7. Registro de Componentes y Nodos Figma

| Componente | Archivo | Nodo Figma | Descripción / Activos |
| :--- | :--- | :--- | :--- |
| Empty State Home | `src/components/home/HomeView.tsx` | `631:28540` | `/BubbleZip.svg`, contenedor `631:28544` |
| Modal Perfil Listo | `src/components/onboarding/WelcomeOfferModal.tsx` | `631:28510` | Botón OK, secuencia inicial |
| Modal Oferta Trabajo | `src/components/onboarding/WelcomeOfferModal.tsx` | `631:28539` | `/JobCard2.svg` (148x164px centrado) |
| Detalle de Oferta | `src/components/jobs/JobOfferDetailScreen.tsx` | `631:28603` | Header imagen, resumen 3 columnas, H-2A/H-2B |
| Modal Código Verificado | `src/components/onboarding/TermsOfServiceScreen.tsx` | `3654:9349` | `/BubbleZip.svg`, flujo 1 "I have invitation code" |
| Bottom Sheet Visa | `src/components/onboarding/VisaPathBottomSheet.tsx` | - | ¡Importante! El camino hacia tu visa |
