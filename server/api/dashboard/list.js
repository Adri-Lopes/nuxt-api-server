export default defineEventHandler(() => {
  return {
    success: true,
    message: "Dashboard carregado com sucesso.",
    data: [
      {
        patients: 4,
        insurance: 3,
      }

    ],
  };
});