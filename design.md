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
   - Renderiza la pantalla principal vacía con título **"Todo está listo"** / **"Everything is ready"** (`font-semibold text-[18px] text-[#171717]`) y descripción *"Estamos esperando a que las empresas te envíen ofertas. Podrás verlas aquí."* / *"We are waiting for companies to send you offers. You will be able to see them here."* (`text-[14px] text-[#737373]`).
4. **Secuencia de Modales de Invitación**:
   - **Modal 1 (Nodo Figma `631:28510`)**: Se presenta de forma inmediata sobre la pantalla Principal. Título *"¡Hola, [Nombre]!"* (`text-[24px] font-semibold text-[#0038d0]`). Mensajes: *"Las empresas te enviarán ofertas aquí."* (16px semibold), *"Te ayudaremos. Paso a paso."* (16px regular), y *"¡Revisa esta página todos los días para ver nuevas ofertas!"* (18px semibold). Botón **Okay**.
   - **Transición**: Al presionar **Okay**, el Modal 1 se cierra y despliega inmediatamente el **Modal 2 (Nodo Figma `631:28539`)**.
   - **Modal 2 (Nodo Figma `631:28539`)**: Título *"¡Tienes ofertas de trabajo!"* / *"You have job invitations!"* (`text-[28px] font-semibold text-[#0038d0]`) y mensaje *"Mira el trabajo y decide si lo quieres."* (`text-[16px] regular`). Contiene la imagen `/JobCard2.svg` (148px x 164px) perfectamente centrada en el banner superior. Botón **Ver trabajo** / **View Job**.
5. **Pantalla de Detalle de Oferta (`JobOfferDetailScreen.tsx`, Nodo Figma `631:28603`)**:
   - Al seleccionar **Ver trabajo**, se redirige a la vista de detalle de oferta (Nodo `631:28603`).
   - **Traducción Dinámica según Idioma Seleccionado**:
     - **Título del trabajo**: `"Coordinador de Manejo Integrado de Plagas y Conservación de Polinizadores"` (`es`) / `"Integrated Pest Management and Pollinator Conservation Coordinator"` (`en`).
     - **Empresa**: `"Granja Sunnydale Orchards"` (`es`) / `"Sunnydale Orchards farm"` (`en`).
     - **Ubicación**: `"Ciudad, Estado"` (`es`) / `"City, State"` (`en`).
     - **Resumen 3 Columnas**: Fecha Inicio (`12/04/2025`), Período (`"3 Meses"` / `"3 Months"`), Tarifa Pago (`"12 USD"`).
     - **Sección de Descripción**: `"Un sistema de diseño para productos a nivel empresarial."` (`es`) / `"A design system for enterprise-level products."` (`en`).
     - **Valores y Etiquetas de Requisitos**:
       - Horario de trabajo: `"Lunes - Viernes"` (`es`) / `"Monday - Friday"` (`09:00 - 18:00`).
       - Educación mínima: `"Licenciatura"` (`es`) / `"Bachelor’s"` (`en`).
       - Experiencia mínima: `"1 año"` (`es`) / `"1 year"` (`en`).
       - Condiciones ambientales: `"Químicos, Calor, Frío, Empujar, Jalar"` (`es`) / `"Chemicals, Heat, Cold, Pushing, Pulling"` (`en`).
       - Idioma y nivel: `"Inglés / B2-Intermedio"` (`es`) / `"English / B2-Intermediate"` (`en`).
       - Requerido conducir: `"Sí"` (`es`) / `"Yes"` (`en`).
       - Carga mínima: `"50Kg"`.
       - Requerido supervisar: `"No"`.
       - Comidas provistas: `"No"`.
   - Botón Primario: **Aceptar invitación** / **Accept invitation**. Botón Secundario: **No quiero esta oferta** / **I don't want this job**.
6. **Pantalla de Confirmación de Aceptación (`ConfirmationScreen.tsx`, Nodo Figma `631:28567`)**:
   - Al presionar **Aceptar invitación** / **Accept invitation**, se muestra la pantalla de confirmación (Nodo `631:28567`).
   - Ilustración superior de Thumbs Up con círculos decorativos sobre fondo con degradado suave.
   - Título: `"¡Todo listo!"` (`es`) / `"All set!"` (`en`) (`text-[28px] font-semibold text-[#0038d0]`).
   - Descripción: *"La empresa se pondrá en contacto contigo pronto para agendar tu entrevista de trabajo."* y *"¡Mantente al pendiente de las notificaciones!"*.
   - Botón icono `X` superior izquierdo para cerrar o regresar.
   - Botón Primario: **Regresar a mis invitaciones de trabajo** (`es`) / **Return to my job invitations** (`en`).
7. **Pantalla Principal con Invitaciones (`HomeView.tsx`, Nodo Figma `631:28431`)**:
   - Redirige a la vista Principal actualizada con el listado de invitaciones (`631:28431`).
   - Título de Sección: `"Invitaciones de trabajo"` / `"Job Invitations"` y contador *"Mostrando 2 invitaciones"*.
   - **Tarjeta 1 (Entrevista pendiente)**: Badge superior `bg-[#d4d4d4]` `"Entrevista pendiente"` / `"Interview Pending"`, banner de imagen, título de vacante, empresa, 3 columnas (Período, Tarifa pago, Ubicación) y fecha de recepción.
   - **Tarjeta 2 (Nueva invitación)**: Badge superior `bg-[#ffd16e]` `"¡Nueva invitación de trabajo!"` / `"New job invitation!"`, banner de imagen, título de vacante, empresa, fecha y botón **Ver trabajo** / **View Job**.
8. **Sección de Documentos / Empty State (`DocumentsView.tsx`, Nodo Figma `2023:45431`)**:
   - Pestaña de navegación etiquetada como **"Documentos"** (`es`) / **"Documents"** (`en`) (icono `folder`).
   - Encabezado superior con título `"Documentos"` / `"Documents"` (`text-[24px] font-semibold text-[#0038d0]`).
   - Ilustración central de documento/perfil con sombra en el suelo e iconos circulares flotantes.
   - Título: `"Aún no hay documentos"` (`es`) / `"No documents yet"` (`en`) (`text-[18px] font-semibold text-[#171717]`).
   - Subtítulo: *"Tus documentos aparecerán en este espacio. Podrás revisarlos a lo largo de tu proceso."* / *"Your documents will appear in this space. You can review them throughout your process"* (`text-[14px] text-[#737373]`).
9. **Sección de Calendario / Empty State (`CalendarView.tsx`, Nodo Figma `3675:70238`)**:
   - Pestaña de navegación etiquetada como **"Calendar"** (`es` / `en`) (icono `calendar_today`).
   - Encabezado superior con título `"Calendario"` / `"Calendar"` (`text-[24px] font-semibold text-[#0038d0]`).
   - Ilustración central de icono de calendario con sombra en el suelo y partículas circulares flotantes.
   - Título: `"Aún no hay eventos"` (`es`) / `"No Events yet"` (`en`) (`text-[18px] font-semibold text-[#171717]`).
   - Subtítulo: *"Verás los nuevos eventos de los empleadores en esta sección."* / *"You'll see new events from employers in this section."* (`text-[14px] text-[#737373]`).
10. **Sección de Mensajes / Empty State (`JobsView.tsx`, Nodo Figma `3677:70564`)**:
   - Pestaña de navegación etiquetada como **"Employer"** (icono `chat_bubble_outline`).
   - Encabezado superior con título `"Mensajes"` / `"Messages"` (`text-[24px] font-semibold text-[#0038d0]`).
   - Ilustración central de globos de conversación (`0444_Chat_7`, `/assets/messages_empty/imgChat31.png`) con sombra en el suelo e iconos circulares flotantes.
   - Título: `"Aún no hay mensajes"` (`es`) / `"No Messages yet"` (`en`) (`text-[18px] font-semibold text-[#171717]`).
   - Subtítulo: *"Verás los nuevos mensajes de los empleadores en esta sección."* / *"You'll see new messages from employers in this section."* (`text-[14px] text-[#737373]`).
11. **Notificación Push In-App (`PushNotificationBanner.tsx`, Nodo Figma `1004:4817`)**:
    - Banner flotante ubicado inmediatamente debajo de la barra superior del encabezado (`top-[68px]`, centrado horizontalmente) con fondo azul suave (`#E7F6FF`), badge de logo Zipmi, texto de invitación a entrevista y botón de cierre.
    - Animación de entrada de arriba hacia abajo (`animate-slide-down`) sin overlay oscuro de fondo.
    - Temporizador automático de 8 segundos y opción de descarte manual.
    - Al hacer clic en el banner se navega directamente a la pantalla de **Horarios Disponibles** (`available_times`).
12. **Página Dedicada de Notificaciones (`NotificationsView.tsx`)**:
    - Vista dedicada que abre al presionar el botón circular de campana de notificaciones en el encabezado superior.
    - Lista interactiva de notificaciones (entrevistas, invitaciones a empleo).
13. **Pantalla de Horarios Disponibles (`AvailableTimesView.tsx`, Nodo Figma `1004:4515`)**:
    - Icono de regreso único (`arrow_back`).
    - Navegación de meses dinámica con controles `<` y `>` (Marzo, Abril, Mayo 2025).
    - Selector dinámico de días y horarios variables por cada día seleccionado.
    - Botón primario `"Elegir este horario"` / `"Choose This Time"` y botón ghost rojo `"No quiero este trabajo"` / `"I don't want this job"`.
14. **Home Actualizado con Invitación a Entrevista (`HomeView.tsx`, Nodo Figma `1004:5204`)**:
    - Botón de notificaciones en encabezado que abre la página dedicada `NotificationsView`.
    - Tarjeta 1 con botón `"Elegir horario"` / `"Pick a Time"`.
    - Tarjeta 2 con botón `"Ver empleo"` / `"View Job"`.
15. **Confirmación de Entrevista Programada (`InterviewScheduledConfirmationView.tsx`, Nodo Figma `1004:4444`)**:
    - Se despliega al pulsar `"Choose This Time"` en la selección de horario.
    - Ilustración de Thumbs Up con sombra en el suelo y partículas circulares.
    - Título: `"Your interview is scheduled!"` / `"¡Tu entrevista está programada!"` (`#0038D0`).
    - Subtítulo: *"Check your calendar to see the date, time, and link to join the meeting."* / *"Revisa tu calendario para ver la fecha, hora y enlace para unirte a la reunión."*.
    - Botón primario `"View Calendar"` / `"Ver Calendario"` y botón de regreso a inicio.
16. **Sección de Calendario con Evento de Entrevista (`CalendarView.tsx`, Nodo Figma `1004:4185`)**:
    - Tarjeta de evento de entrevista con franja vertical azul (`#2874FF`), hora del evento y botón `"Join"` / `"Unirse"` (`#D3EFFF`).
    - Encabezado de fecha `"11 Apr • Today"` / `"11 Abr • Hoy"`.
17. **Home Post-Programación de Entrevista (`HomeView.tsx`, Nodo Figma `1004:5285`)**:
    - Sección superior **"Upcoming Appointments"** / **"Próximas Citas"** con tarjeta del evento programado y botón `"Join"` / `"Unirse"`.
    - En la sección **"Job Invitations"**, la tarjeta 1 actualiza su banner a morado `"Your interview was scheduled"` / `"Tu entrevista fue programada"` y remueve el botón de elegir horario.

---

## 7. Registro de Componentes y Nodos Figma

| Componente | Archivo | Nodo Figma | Descripción / Activos |
| :--- | :--- | :--- | :--- |
| Empty State Home | `src/views/HomeView.tsx` | `631:28540` | `/BubbleZip.svg`, contenedor `631:28544` |
| Home con Invitaciones | `src/views/HomeView.tsx` | `631:28431` | Tarjetas Entrevista pendiente y Nueva invitación |
| Home Actualizado Entrevista | `src/views/HomeView.tsx` | `1004:5204` | Tarjeta Schedule your interview con botón Pick a Time |
| Home Post-Programación | `src/views/HomeView.tsx` | `1004:5285` | Sección Upcoming Appointments y banner morado Your interview was scheduled |
| Notificación Push In-App Centrada | `src/components/PushNotificationBanner.tsx` | `1004:4817` | Banner flotante centrado 8s con fondo difuminado |
| Página Notificaciones | `src/views/NotificationsView.tsx` | - | Vista dedicada de notificaciones al presionar la campana del header |
| Horarios Disponibles | `src/views/AvailableTimesView.tsx` | `1004:4515` | Icono back único, selector dinámico de mes y slots de horas por día |
| Confirmación Entrevista | `src/views/InterviewScheduledConfirmationView.tsx` | `1004:4444` | Ilustración Thumbs Up, Your interview is scheduled! |
| Calendario con Evento | `src/views/CalendarView.tsx` | `1004:4185` | Tarjeta de entrevista programada con botón Join videocall |
| Modal Perfil Listo | `src/components/onboarding/WelcomeOfferModal.tsx` | `631:28510` | Botón OK, secuencia inicial |
| Modal Oferta Trabajo | `src/components/onboarding/WelcomeOfferModal.tsx` | `631:28539` | `/JobCard2.svg` (148x164px centrado) |
| Detalle de Oferta | `src/components/jobs/JobOfferDetailScreen.tsx` | `631:28603` | Header imagen, resumen 3 columnas, H-2A/H-2B, i18n |
| Confirmación Oferta | `src/components/onboarding/ConfirmationScreen.tsx` | `631:28567` | Thumbs Up, All set!, Regresar a invitaciones |
| Empty State Documentos | `src/views/DocumentsView.tsx` | `2023:45431` | Ilustración documento/perfil, No documents yet |
| Empty State Calendario | `src/views/CalendarView.tsx` | `3675:70238` | Ilustración calendario, No Events yet |
| Empty State Mensajes | `src/views/JobsView.tsx` | `3677:70564` | Ilustración burbujas chat, No Messages yet |
| Bottom Sheet Visa | `src/components/onboarding/VisaPathBottomSheet.tsx` | - | ¡Importante! El camino hacia tu visa |
