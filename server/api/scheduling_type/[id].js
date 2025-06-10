export default defineEventHandler((event) => {
    const id = event.context.params.id;

    if (id === "1") {
        return {
            success: true,
            message: "Tipo de Agendamento encontrado com sucesso.",
            data: {
                id: 1,
                name: "Consulta",
                status: 1,
                tempo: 1
            },
        };
    }

    throw createError({ statusCode: 404, message: "Tipo de Agendamento não encontrado" });
});
