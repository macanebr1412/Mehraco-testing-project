// Price intori ba formate behtarin neshoon dade mishe.
export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
