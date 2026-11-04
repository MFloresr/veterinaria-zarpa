# Zarpa: clínica veterinaria

Web de una clínica veterinaria hecha con Astro 7. Diseño: **neobrutalismo de pegatina** (bordes negros gruesos, sombras duras, colores de caramelo, un poco de inclinación), con Bricolage Grotesque y Figtree.

## Qué incluye (21 páginas)

- **¿Es urgente?** (`/urgencias/`): se elige perro, gato o conejo y se marcan señales; la guía responde «ve ya», «hoy» o «esta semana» con qué hacer mientras tanto y el teléfono de urgencias. Siempre con el aviso de que es una orientación general y no un diagnóstico.
- **Calendario de vacunas** (`/vacunas/`): por especie y edad, qué toca ahora, pronto, más adelante o mantener al día.
- Servicios con precios, tres fichas de especie (perro, gato y conejo), equipo, consejos, cita con motivo preseleccionable (`?servicio=vacuna`), contacto y textos legales.

## Dónde está cada cosa

Signos de alarma: `src/content/datos/signos.json`. Vacunas: `vacunas.json`. Servicios, equipo y preguntas: `src/content/datos/`. Especies: `src/content/especies/`. Pruebas: `_herramientas/flujo-veterinaria.cjs`.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Pasar el contenido a Sanity

Las páginas solo llaman a `src/lib/contenido.ts`. Hay que crear en Sanity un tipo de documento por cada colección de `src/content.config.ts` (con los mismos campos) y un documento único `ajustes` con los datos de `src/lib/sitio.ts`, y reescribir `contenido.ts` con consultas GROQ. Un webhook que lance un despliegue al publicar completa el circuito.

## Formularios y privacidad

Los formularios funcionan en modo demostración y validan en el navegador. Para enviarlos de verdad, define `PUBLIC_FORM_ENDPOINT` (por ejemplo, una función serverless que mande el correo). La web no usa cookies ni analítica, no carga recursos de terceros (tipografías y fotos están alojadas en la propia web) y los textos legales son plantillas que debe revisar el asesor del cliente. Las fotografías proceden de Wikimedia Commons con licencias libres; la autoría está en `/creditos/` y se sustituyen por las del cliente.
