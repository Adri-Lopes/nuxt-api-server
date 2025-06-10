import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';

const _id_ = defineEventHandler((event) => {
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
      }
    };
  }
  throw createError({ statusCode: 404, message: "Tipo de Agendamento n\xE3o encontrado" });
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
