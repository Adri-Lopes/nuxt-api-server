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
    message: "Lista de pacientes carregada com sucesso.",
    data: [
      {
        id: 1,
        name: "Maria da Silva",
        phone: "(11) 98787-6764",
        cpf: "314.678.087-00",
        last_appointment: "01/01/2024",
        next_appointment: "20/06/2025"
      },
      {
        id: 2,
        name: "Jo\xE3o Pedro",
        phone: "(21) 99876-5432",
        cpf: "123.456.789-10",
        last_appointment: "15/02/2024",
        next_appointment: "10/07/2025"
      },
      {
        id: 3,
        name: "Ana Clara",
        phone: "(31) 91234-5678",
        cpf: "987.654.321-00",
        last_appointment: "10/03/2024",
        next_appointment: "05/08/2025"
      },
      {
        id: 4,
        name: "Lucas Martins",
        phone: "(41) 93456-7890",
        cpf: "456.789.123-99",
        last_appointment: "20/04/2024",
        next_appointment: "30/09/2025"
      }
    ]
  };
});

export { list as default };
//# sourceMappingURL=list.mjs.map
