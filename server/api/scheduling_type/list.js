export default defineEventHandler(() => {
  return {
    success: true,
    message: "Lista de convênios carregada com sucesso.",
    total: 3,
    data: [
      {
        id: 1,
        name: "Consulta",
        status: 1,
      },
      {
        id: 2,
        name: "Retorno",
        status: 1,
      },
      {
        id: 3,
        name: "Exame",
        status: 0,
      },
    ],
  };
});