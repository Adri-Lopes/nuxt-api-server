import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';

const list = defineEventHandler(() => {
  return {
    success: true,
    message: "Lista de conv\xEAnios carregada com sucesso.",
    data: [
      {
        id: 1,
        name: "Consulta",
        status: 1
      },
      {
        id: 2,
        name: "Retorno",
        status: 1
      },
      {
        id: 3,
        name: "Exame",
        status: 0
      }
    ]
  };
});

export { list as default };
//# sourceMappingURL=list.mjs.map
