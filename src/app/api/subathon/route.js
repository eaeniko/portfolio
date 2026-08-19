export async function GET() {
  // ajuste para a data/hora exata em que o subathon comecou (horario de Brasilia = -03:00)
  const start = new Date("2026-08-18T07:56:00-03:00");
  const now = new Date();

  let diff = now.getTime() - start.getTime();
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);

  const texto = `${days} dias, ${hours} horas e ${minutes} minutos`;

  return new Response(texto, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}