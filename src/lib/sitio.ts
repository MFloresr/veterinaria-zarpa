// Datos de la clínica. En producción vendrían del CMS (un documento "Ajustes del sitio").
// Todo lo marcado como ejemplo o entre corchetes lo sustituye el cliente con sus datos reales.

export type Horario = { etiqueta: string; tramos: { abre: string; cierra: string }[] };

export const sitio = {
  nombre: 'Zarpa',
  eslogan: 'Clínica veterinaria para perros, gatos y conejos',
  descripcion:
    'Clínica veterinaria con cita online, urgencias y calendario de vacunas. Guía rápida para saber si lo que le pasa a tu animal es urgente.',
  url: 'https://www.zarpavet.example',
  // Datos de ejemplo
  telefono: '+34937000000',
  telefonoVisible: '937 00 00 00',
  telefonoUrgencias: '+34600000111',
  telefonoUrgenciasVisible: '600 00 01 11',
  whatsapp: '34600000000',
  email: 'hola@zarpavet.example',
  direccion: { calle: 'Carrer de Mostra, 21', cp: '08201', ciudad: 'Sabadell', provincia: 'Barcelona' },
  mapa: 'https://www.openstreetmap.org/search?query=Sabadell',
  endpointFormularios: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  cancelacionHoras: 12,
  horarios: [
    { etiqueta: 'Lunes a viernes', tramos: [{ abre: '09:00', cierra: '14:00' }, { abre: '16:00', cierra: '20:00' }] },
    { etiqueta: 'Sábados', tramos: [{ abre: '10:00', cierra: '14:00' }] },
    { etiqueta: 'Domingos', tramos: [] },
  ] as Horario[],
  // Horario por día de la semana (0 = domingo)
  semana: {
    0: [],
    1: [['09:00', '14:00'], ['16:00', '20:00']],
    2: [['09:00', '14:00'], ['16:00', '20:00']],
    3: [['09:00', '14:00'], ['16:00', '20:00']],
    4: [['09:00', '14:00'], ['16:00', '20:00']],
    5: [['09:00', '14:00'], ['16:00', '20:00']],
    6: [['10:00', '14:00']],
  } as Record<number, string[][]>,
  responsableLegal: {
    razonSocial: '[Razón social del cliente]',
    nif: '[NIF]',
    registro: '[Número de registro de centros veterinarios]',
    domicilio: 'Carrer de Mostra, 21, 08201 Sabadell',
  },
};

export const menu = [
  { href: '/urgencias/', texto: '¿Es urgente?' },
  { href: '/vacunas/', texto: 'Vacunas' },
  { href: '/servicios/', texto: 'Servicios' },
  { href: '/especies/', texto: 'Especies' },
  { href: '/equipo/', texto: 'Equipo' },
  { href: '/consejos/', texto: 'Consejos' },
];
