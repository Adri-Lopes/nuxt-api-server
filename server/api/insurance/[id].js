export default defineEventHandler((event) => {
    const id = event.context.params.id;

    if (id === "1" || id === "2" || id === "3") {
        return {
            success: true,
            message: "Convênio encontrado com sucesso.",
            data: {
                id: 1,
                name: "Unimed",
                status: 1,
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Unimed_box_logo.svg"
            },
        };
    }

    throw createError({ statusCode: 404, message: "Convênio não encontrado" });
});
