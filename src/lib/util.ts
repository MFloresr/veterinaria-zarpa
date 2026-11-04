export const NBSP = ' ';
const nf = new Intl.NumberFormat('es-ES', { useGrouping: 'always' });
export const euros = (n: number) => `${nf.format(n)}${NBSP}€`;

export const NOMBRE_CATEGORIA: Record<string, string> = {
  consulta: 'Consulta',
  prevencion: 'Prevención',
  diagnostico: 'Diagnóstico',
  cirugia: 'Cirugía',
  peluqueria: 'Higiene',
};
export const NOMBRE_ESPECIE: Record<string, string> = { perro: 'Perro', gato: 'Gato', conejo: 'Conejo' };
