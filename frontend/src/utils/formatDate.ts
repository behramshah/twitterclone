import formatDistance from 'date-fns/formatDistance'
import az from 'date-fns/locale/az'

export const formatDate = (date: Date): string => {
  return formatDistance(
    date,
    new Date(),
    { locale: az }
  );
}