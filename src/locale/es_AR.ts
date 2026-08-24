import * as timeago from 'timeago.js';

function locale(number: number, index: number) {
  return [
    ['justo ahora', 'en un momento'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace un minuto', 'en un minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace una hora', 'en una hora'],
    ['hace %s horas', 'en %s horas'],
    ['hace un día', 'en un día'],
    ['hace %s días', 'en %s días'],
    ['hace una semana', 'en una semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['hace un mes', 'en un mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace un año', 'en un año'],
    ['hace %s años', 'en %s años'],
  ][index] as [string, string];
}

timeago.register('es_AR', locale);
