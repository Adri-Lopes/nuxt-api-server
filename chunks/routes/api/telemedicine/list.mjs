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
    message: "Lista de Telemedicina carregada com sucesso.",
    data: [
      {
        id: 1,
        name: "Maria da Dores",
        cpf: "345.565.434-09",
        ip: "192.168.0.1",
        appointment_date: "19/06/2026"
      },
      {
        id: 2,
        name: "Jo\xE3o Batista",
        cpf: "123.456.789-01",
        ip: "192.168.1.45",
        appointment_date: "02/08/2025"
      },
      {
        id: 3,
        name: "Ana Paula Souza",
        cpf: "987.654.321-00",
        ip: "10.0.0.23",
        appointment_date: "15/09/2025"
      },
      {
        id: 4,
        name: "Carlos Eduardo Lima",
        cpf: "456.123.789-55",
        ip: "172.16.0.101",
        appointment_date: "30/11/2025"
      }
    ]
  };
});

export { list as default };
//# sourceMappingURL=list.mjs.map
