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
      message: "Conv\xEAnio encontrado com sucesso.",
      data: {
        id: 1,
        name: "Unimed",
        status: 1,
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Unimed_box_logo.svg"
      }
    };
  }
  throw createError({ statusCode: 404, message: "Conv\xEAnio n\xE3o encontrado" });
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
