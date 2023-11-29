function formatPair(pair: string) {
  return pair.replace('-', '/');
}

function truncate(value: string, length: number) {
  return value.length >= length ? `${value.substring(0, length)}...` : value;
}

function toCurrency(value: number, region = 'en-US') {
  if (!value) return '-';
  return Intl.NumberFormat(region, {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export { formatPair, truncate, toCurrency };
