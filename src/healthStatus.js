export default function healthStatus(personage) {
  if (personage.health === undefined) return null;
  if (personage.health > 50) return 'healthy';
  if (personage.health >= 15) return 'wounded';
  return 'critical';
}
