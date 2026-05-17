# Marandev.co — Sitio Web

> Instrucciones para Claude Code: construir un sitio web estático completo en HTML/CSS/JS puro.
> Sin frameworks. Sin dependencias externas excepto Google Fonts.
> Estilo: oscuro y moderno. Colores principales: negro (#0a0f0a), verde (#7ec845), blanco (#e4ead8).
> Tipografía: Syne (títulos) + Instrument Sans (cuerpo) de Google Fonts.

---

## Estructura de archivos

```
marandev-web/
├── index.html          ← Inicio
├── nosotros.html       ← Nosotros
├── productos.html      ← Productos
├── contacto.html       ← Contacto
├── agendachat/
│   ├── index.html      ← Landing AgendaChat
│   ├── privacidad.html ← Política de Privacidad (requerida por Meta)
│   └── terminos.html   ← Términos de Servicio (requerido por Meta)
├── css/
│   └── style.css       ← Estilos globales compartidos
└── js/
    └── main.js         ← Navegación móvil y comportamiento común
```

---

## Diseño y estilo global

```
Fondo:        #0a0f0a
Superficie:   #131810
Superficie 2: #1c2218
Acento verde: #7ec845
Acento ámbar: #f0c040
Texto:        #e4ead8
Texto muted:  #6b7a5a
Borde:        rgba(126,200,69,0.09)

Tipografía:
  Títulos:  Syne 700/800 desde Google Fonts
  Cuerpo:   Instrument Sans 400/500/600 desde Google Fonts
  Código:   JetBrains Mono 400/500 desde Google Fonts

Navbar: fija en top, fondo semitransparente con blur
Footer: oscuro con links a páginas legales
Botones CTA: fondo #7ec845, texto negro, border-radius 8px
Secciones: padding generoso, máx-width 1100px centrado
```

---

## Navbar (compartida en todas las páginas)

```
Logo: "Marandev" en Syne bold color verde

Links:
  Inicio        → /index.html
  Nosotros      → /nosotros.html
  Productos     → /productos.html
  Contacto      → /contacto.html

Botón CTA: "Empezar ahora" → /agendachat/index.html

Móvil: hamburger menu
```

---

## Footer (compartido en todas las páginas)

```
Columna 1:
  Logo Marandev
  "Soluciones de software para negocios latinoamericanos."
  © 2025 Marandev. Todos los derechos reservados.

Columna 2 — Empresa:
  Inicio
  Nosotros
  Productos
  Contacto

Columna 3 — AgendaChat:
  Acerca de AgendaChat
  Política de Privacidad  → /agendachat/privacidad.html
  Términos de Servicio    → /agendachat/terminos.html

Columna 4 — Contacto:
  📧 hola@marandev.co
  🌐 marandev.co
  Colombia 🇨🇴
```

---

## Página 1 — Inicio (index.html)

### Hero
```
Badge: "Software para negocios"
Título: "Automatiza tu negocio con soluciones inteligentes"
Subtítulo: "Desarrollamos software SaaS que simplifica la operación 
            de negocios latinoamericanos. Simple, económico y efectivo."
CTA primario: "Ver nuestros productos" → /productos.html
CTA secundario: "Contáctanos" → /contacto.html
```

### Sección — Por qué Marandev
```
Título: "¿Por qué elegirnos?"

3 cards:
1. 🚀 "Tecnología moderna"
   "Construimos con las mejores herramientas disponibles 
    para garantizar velocidad, seguridad y escalabilidad."

2. 💰 "Precios justos"
   "Diseñados para el mercado latinoamericano. 
    Sin costos ocultos ni sorpresas."

3. 🤝 "Soporte cercano"
   "Atención personalizada en español. 
    Estamos contigo en cada paso."
```

### Sección — Nuestros productos
```
Título: "Nuestros productos"
Subtítulo: "Soluciones diseñadas para resolver problemas reales"

Card AgendaChat:
  Badge: "Disponible ahora"
  Título: "AgendaChat"
  Descripción: "Sistema de agendamiento de citas por WhatsApp. 
                Tus clientes agendan en segundos, tú gestionas 
                todo desde Google Calendar."
  Features:
    → Agendamiento 24/7 por WhatsApp
    → Sincronización con Google Calendar
    → Sin apps adicionales para tu equipo
    → Recordatorios automáticos
  CTA: "Conocer más" → /agendachat/index.html

Card próximamente (placeholder):
  Badge: "Próximamente"
  Título: "Próximo producto"
  Descripción: "Estamos trabajando en nuevas soluciones. 
                Suscríbete para ser el primero en enterarte."
  CTA deshabilitado: "Muy pronto"
```

### Sección — CTA final
```
Fondo: verde oscuro
Título: "¿Listo para modernizar tu negocio?"
Subtítulo: "Comienza hoy con una prueba gratuita de 30 días."
CTA: "Comenzar gratis" → /agendachat/index.html
```

---

## Página 2 — Nosotros (nosotros.html)

### Hero
```
Título: "Sobre Marandev"
Subtítulo: "Una empresa de software enfocada en resolver 
            problemas reales para negocios latinoamericanos."
```

### Misión y visión
```
Misión:
"Desarrollar soluciones de software accesibles y efectivas 
que permitan a los negocios latinoamericanos automatizar 
sus procesos, ahorrar tiempo y crecer de manera sostenible."

Visión:
"Ser la plataforma de software de referencia para PYMES 
en Colombia y Latinoamérica, reconocida por la calidad, 
simplicidad y el valor real que entrega a sus clientes."
```

### Nuestros valores
```
4 cards:
1. ⚡ Simplicidad — "El mejor software es el que no necesita manual."
2. 🎯 Foco — "Hacemos pocas cosas pero las hacemos muy bien."
3. 💚 Impacto — "Medimos nuestro éxito por el éxito de nuestros clientes."
4. 🔒 Confianza — "Transparencia total en precios, datos y operación."
```

### Historia
```
Título: "Nuestra historia"
Texto: "Marandev nació de la necesidad de crear soluciones 
de software que realmente se adapten a la realidad de los 
negocios colombianos. Vimos cómo muchos profesionales y 
empresas perdían tiempo valioso en procesos manuales que 
podían automatizarse con tecnología simple y accesible.

Empezamos con AgendaChat, una plataforma que permite a 
médicos, veterinarios, abogados y otros profesionales 
gestionar sus citas directamente por WhatsApp, sin 
complicaciones y sin costos exagerados.

Hoy seguimos construyendo con el mismo principio: 
software útil, simple y al alcance de todos."
```

---

## Página 3 — Productos (productos.html)

### Hero
```
Título: "Nuestros productos"
Subtítulo: "Soluciones SaaS para automatizar tu negocio"
```

### AgendaChat — detalle completo
```
Título: "AgendaChat"
Tagline: "Agendamiento de citas por WhatsApp, sin complicaciones."

Descripción larga:
"AgendaChat es una plataforma de agendamiento que funciona 
100% por WhatsApp. Tus clientes escriben, el bot gestiona 
la cita y todo queda sincronizado en Google Calendar. 
Tu equipo no necesita aprender ninguna herramienta nueva."

Cómo funciona (3 pasos):
  1. "Tu cliente escribe por WhatsApp"
     "Escribe al número del negocio y el bot lo guía 
      para agendar su cita en segundos."
  
  2. "El bot gestiona todo"
     "Verifica disponibilidad, confirma la cita y 
      envía un archivo para agregar al calendario."
  
  3. "Tú solo atiendes"
     "La cita aparece en tu Google Calendar. 
      Sin apps extra, sin complicaciones."

Planes y precios:
  Starter  — $49.900 COP/mes — Hasta 2 profesionales
  Pro      — $99.900 COP/mes — Hasta 5 profesionales ⭐ Popular
  Business — $249.900 COP/mes — Hasta 10 profesionales + extras

Todos incluyen:
  ✓ 30 días de prueba gratis
  ✓ Agendamiento 24/7 por WhatsApp
  ✓ Google Calendar sincronizado
  ✓ Configuración incluida
  ✓ Soporte en español

CTA: "Comenzar prueba gratis" → /agendachat/index.html
```

---

## Página 4 — Contacto (contacto.html)

### Hero
```
Título: "Contáctanos"
Subtítulo: "Estamos aquí para ayudarte"
```

### Información de contacto
```
📧 Email: hola@marandev.co
💬 WhatsApp: [número de contacto]
🌐 Web: marandev.co
📍 Colombia 🇨🇴
Horario: Lunes a viernes, 8am – 6pm (hora Colombia)
```

### Formulario de contacto
```
Campos:
  Nombre completo (requerido)
  Email (requerido)
  Asunto (select): 
    Información sobre AgendaChat
    Soporte técnico
    Alianzas comerciales
    Otro
  Mensaje (textarea, requerido)

Botón: "Enviar mensaje"
Nota: "Te respondemos en menos de 24 horas hábiles."

El formulario usa mailto: hola@marandev.co (sin backend)
```

---

## Página 5 — AgendaChat Landing (agendachat/index.html)

### Hero
```
Badge: "WhatsApp + Google Calendar"
Título: "Agenda citas por WhatsApp, sin complicaciones"
Subtítulo: "Tu negocio disponible 24/7. Tus clientes agendan 
            en segundos. Tú gestionas desde Google Calendar."
CTA primario: "Comenzar 30 días gratis"  → /contacto.html
CTA secundario: "Ver cómo funciona" → ancla #como-funciona
```

### Cómo funciona (id="como-funciona")
```
Paso 1: Cliente escribe "Hola" al WhatsApp del negocio
Paso 2: Bot muestra profesionales disponibles
Paso 3: Cliente elige profesional, tipo de cita y horario
Paso 4: Cita confirmada + archivo de calendario enviado
Paso 5: Aparece en Google Calendar del profesional
```

### Para quién es
```
Cards con íconos:
🩺 Médicos y odontólogos
🐾 Veterinarias
⚖️ Abogados y consultores
💆 Psicólogos y terapeutas
💊 Nutricionistas
🔬 Especialistas en general
```

### Planes
```
Mismos 3 planes de la página productos.html
```

### FAQ
```
¿Necesito instalar algo? 
"No. Funciona con WhatsApp y Google Calendar que ya tienes."

¿Mis clientes necesitan una app?
"No. Solo necesitan WhatsApp, que todos tienen."

¿Qué pasa si tengo más de 10 profesionales?
"El plan Business permite agregar profesionales adicionales 
por $35.000 COP/mes cada uno."

¿Cómo se configuran los horarios?
"Nosotros lo configuramos todo en el onboarding. 
Después cada profesional puede ajustar su horario 
directamente desde WhatsApp."

¿Los datos de mis clientes están seguros?
"Sí. Ver nuestra Política de Privacidad."
```

### Links legales prominentes
```
"Al usar AgendaChat aceptas nuestros:"
→ Términos de Servicio
→ Política de Privacidad
```

---

## Página 6 — Política de Privacidad (agendachat/privacidad.html)
### REQUERIDA POR META — incluir URL en app de Meta developers

```
Título: "Política de Privacidad — AgendaChat"
Última actualización: Mayo 2025
Empresa: Marandev
Contacto: hola@marandev.co

SECCIONES OBLIGATORIAS:

1. Información que recopilamos
   - Nombre completo del usuario final
   - Número de teléfono WhatsApp
   - Fecha y hora de citas agendadas
   - Tipo de servicio solicitado
   - Mensajes enviados al bot durante el proceso de agendamiento
   No recopilamos: contraseñas, datos bancarios, documentos de identidad.

2. Cómo usamos la información
   - Para gestionar y confirmar citas
   - Para enviar confirmaciones por WhatsApp
   - Para sincronizar citas en Google Calendar del profesional
   - Para mejorar el funcionamiento del servicio
   No vendemos ni compartimos datos personales con terceros 
   con fines comerciales.

3. Compartición de datos
   Compartimos datos únicamente con:
   - El negocio (médico, veterinario, etc.) con quien agendas la cita
   - Google (para sincronización de Calendar) — ver política de Google
   - Meta/WhatsApp (plataforma de mensajería) — ver política de Meta
   No compartimos datos con otras terceras partes.

4. Retención de datos
   Los datos se conservan mientras la cuenta del negocio 
   esté activa en AgendaChat. Al cancelar el servicio, 
   los datos se eliminan en un plazo máximo de 30 días.

5. Derechos del usuario
   Tienes derecho a:
   - Solicitar acceso a tus datos
   - Solicitar corrección de datos incorrectos
   - Solicitar eliminación de tus datos
   - Retirar tu consentimiento en cualquier momento
   Para ejercer estos derechos escribe a: hola@marandev.co

6. Seguridad
   Implementamos medidas de seguridad técnicas y organizativas 
   para proteger tu información contra acceso no autorizado, 
   pérdida o divulgación.

7. Menores de edad
   AgendaChat no está dirigido a menores de 18 años. 
   No recopilamos intencionalmente datos de menores.

8. Cambios a esta política
   Notificaremos cambios significativos a través de 
   los canales de comunicación del servicio.

9. Contacto
   Marandev
   hola@marandev.co
   marandev.co
   Colombia
```

---

## Página 7 — Términos de Servicio (agendachat/terminos.html)
### REQUERIDA POR META — incluir URL en app de Meta developers

```
Título: "Términos de Servicio — AgendaChat"
Última actualización: Mayo 2025
Empresa: Marandev
Contacto: hola@marandev.co

SECCIONES:

1. Aceptación de términos
   Al usar AgendaChat aceptas estos términos. 
   Si no estás de acuerdo, no uses el servicio.

2. Descripción del servicio
   AgendaChat es una plataforma de agendamiento de citas 
   que opera a través de WhatsApp y se sincroniza con 
   Google Calendar. El servicio es ofrecido por Marandev.

3. Cuentas y responsabilidades
   - El negocio (cliente de Marandev) es responsable 
     del uso correcto del servicio
   - El negocio es responsable de la información 
     que comparte con sus propios clientes
   - No está permitido usar el servicio para actividades 
     ilegales o que violen las políticas de Meta/WhatsApp

4. Planes y pagos
   - Los precios están en pesos colombianos (COP)
   - El cobro es mensual y recurrente automático
   - Hay un período de prueba gratuita de 30 días
   - No hay reembolsos por períodos ya cobrados
   - El servicio se suspende si el pago falla 
     después del período de gracia

5. Uso aceptable
   Está prohibido usar AgendaChat para:
   - Enviar spam o mensajes no solicitados
   - Actividades ilegales o fraudulentas
   - Violar derechos de terceros
   - Sobrecargar o interferir con el servicio

6. Disponibilidad del servicio
   Nos esforzamos por mantener el servicio disponible 24/7. 
   Sin embargo, no garantizamos disponibilidad ininterrumpida. 
   Realizaremos mantenimientos con previo aviso cuando sea posible.

7. Limitación de responsabilidad
   Marandev no es responsable por:
   - Pérdidas de negocio derivadas de interrupciones del servicio
   - Acciones de terceros (Meta, Google) que afecten el servicio
   - Uso inadecuado del servicio por parte del cliente

8. Propiedad intelectual
   AgendaChat y todos sus componentes son propiedad de Marandev. 
   El cliente no adquiere ningún derecho de propiedad intelectual 
   sobre el servicio.

9. Cancelación
   - El cliente puede cancelar el servicio en cualquier momento
   - Marandev puede cancelar el servicio por incumplimiento 
     de estos términos
   - Al cancelar, los datos se eliminan en 30 días

10. Ley aplicable
    Estos términos se rigen por las leyes de Colombia. 
    Cualquier disputa se resolverá en los tribunales competentes 
    de Colombia.

11. Cambios a los términos
    Notificaremos cambios con al menos 15 días de anticipación 
    por los canales de comunicación del servicio.

12. Contacto
    Marandev
    hola@marandev.co
    marandev.co
    Colombia
```

---

## Instrucciones técnicas para Claude Code

```
1. Crear todos los archivos en la estructura definida arriba
2. El CSS global en css/style.css — no inline styles
3. Navbar y footer idénticos en todas las páginas
4. Todas las páginas deben ser responsive (mobile first)
5. Las páginas de privacidad y términos deben tener:
   - URL limpia y permanente (Meta las referencia por URL)
   - Contenido en texto plano fácil de leer
   - Fecha de última actualización visible
   - Link de regreso a agendachat/index.html
6. El formulario de contacto usa mailto: sin backend
7. Sin JavaScript pesado — solo para navbar móvil
8. Optimizado para carga rápida — sin imágenes pesadas
9. Meta tags básicos en cada página (title, description)
10. Las URLs de políticas que se registran en Meta developers:
    Política de privacidad: https://marandev.co/agendachat/privacidad.html
    Términos de servicio:   https://marandev.co/agendachat/terminos.html
```

---

*Sitio web Marandev.co · Mayo 2025*
*Dominio: marandev.co · Email: hola@marandev.co*
