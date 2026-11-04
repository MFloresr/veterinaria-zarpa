// Esquemas del contenido. Cada colección equivale a un tipo de documento del CMS (Sanity):
// servicios, especies, equipo, opiniones, preguntas, signos de alarma, vacunas y entradas del blog.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const ESPECIES = ['perro', 'gato', 'conejo'] as const;
export const CATEGORIAS = ['consulta', 'prevencion', 'diagnostico', 'cirugia', 'peluqueria'] as const;
export const NIVELES = ['ya', 'hoy', 'pronto'] as const;

const servicios = defineCollection({
  loader: file('src/content/datos/servicios.json'),
  schema: z.object({
    nombre: z.string(),
    categoria: z.enum(CATEGORIAS),
    precio: z.number(),
    desde: z.boolean().default(false),
    descripcion: z.string(),
    orden: z.number(),
  }),
});

const especies = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/especies' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      plural: z.string(),
      foto: image(),
      fotoAlt: z.string(),
      resumen: z.string(),
      queMirar: z.array(z.string()),
      cuidados: z.array(z.string()),
      alarma: z.array(z.string()),
      curiosidad: z.string(),
      orden: z.number(),
    }),
});

const equipo = defineCollection({
  loader: file('src/content/datos/equipo.json'),
  schema: z.object({ nombre: z.string(), cargo: z.string(), especialidad: z.string(), texto: z.string(), colegiado: z.string() }),
});

const opiniones = defineCollection({
  loader: file('src/content/datos/opiniones.json'),
  schema: z.object({ texto: z.string(), nombre: z.string(), animal: z.string() }),
});

const preguntas = defineCollection({
  loader: file('src/content/datos/preguntas.json'),
  schema: z.object({ tema: z.enum(['cita', 'urgencias', 'vacunas', 'general']), pregunta: z.string(), respuesta: z.string() }),
});

// Signos de alarma para la guía «¿Es urgente?». nivel: ya = ahora mismo, hoy = hoy mismo, pronto = en unos días.
const signos = defineCollection({
  loader: file('src/content/datos/signos.json'),
  schema: z.object({ texto: z.string(), nivel: z.enum(NIVELES), especies: z.array(z.enum(ESPECIES)), mientras: z.string() }),
});

// Calendario de vacunas y desparasitación por especie: edad en semanas.
const vacunas = defineCollection({
  loader: file('src/content/datos/vacunas.json'),
  schema: z.object({
    especie: z.enum(ESPECIES),
    nombre: z.string(),
    desdeSemanas: z.number(),
    hastaSemanas: z.number().nullable(),
    repite: z.string(),
    nota: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({ titulo: z.string(), resumen: z.string(), fecha: z.coerce.date(), categoria: z.string(), foto: image(), fotoAlt: z.string(), minutos: z.number() }),
});

export const collections = { servicios, especies, equipo, opiniones, preguntas, signos, vacunas, blog };
