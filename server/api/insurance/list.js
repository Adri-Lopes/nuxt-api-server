export default defineEventHandler(() => {
  return {
    success: true,
    message: "Lista de convênios carregada com sucesso.",
    data: [
      {
        id: 1,
        name: "Unimed",
        value: "unimed",
        status: 1,
      },
      {
        id: 2,
        name: "Bradesco Saúde",
        value: "bradesco_saude",
        status: 0,
      },
      {
        id: 3,
        name: "Amil",
        value: "amil",
        status: 1,
      },
    ],
  };
});