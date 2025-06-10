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
      message: "Paciente encontrado com sucesso.",
      data: {
        id: 1,
        name: "Maria da Silva",
        age: "37 anos",
        cpf: "314.666.178-02",
        birth: "15/04/1988",
        sex: "feminino",
        phone: "(11) 98765-4321",
        email: "maria.silva@example.com",
        patient_origin: "internet",
        other_patient_origin: "",
        indication_name: "Jo\xE3o Pereira",
        cep: "01001-000",
        endereco: "Avenida Paulista",
        numero: "1000",
        complemento: "Apto 101",
        bairro: "Bela Vista",
        estado: "SP",
        cidade: "S\xE3o Paulo",
        status: "ativo",
        appointments: "7",
        insurance: "unimed",
        next_appointment: "12/12/2024 \xE0s 14h00",
        height: "1,70",
        weight: "75",
        allergies: "Dipirona, Tramal",
        chronic_disease: "Diabetes",
        general_diagnoses: "Paciente possui Diabetes",
        evolution: [
          {
            day: "14",
            month: "nov",
            year: "2024",
            time: "14h30",
            title: "An\xE1lise de Exames",
            subtitle: "Resumo",
            report: "<p>Phasellus ut luctus erat, id fermentum arcu. Etiam ex nunc, facilisis ut ante eu, placerat vehicula purus.</p>",
            diagnosis: "<p>Etiam a malesuada eros, ut porttitor nulla.</p>",
            requestedExams: "<ul><li>Hemograma completo</li><li>Glicemia em jejum</li><li>Colesterol total e fra\xE7\xF5es</li></ul>",
            prescription: "<p>Paracetamol 500mg - 1 comprimido de 6/6h por 5 dias</p>",
            memedLink: {
              text: "Conhe\xE7a a MEMED",
              url: "https://memed.com.br/"
            },
            notes: "<p>Paciente deve retornar em 30 dias para reavalia\xE7\xE3o</p>",
            attachments: [
              { name: "Laudo-Hemograma.pdf", url: "#laudo1" },
              { name: "Resultado-Glicemia.pdf", url: "#laudo2" },
              { name: "Exame-Colesterol.pdf", url: "#laudo3" }
            ]
          },
          {
            day: "22",
            month: "dez",
            year: "2024",
            time: "10h00",
            title: "Consulta de Rotina",
            subtitle: "Check-up Geral",
            report: "<p>Paciente assintom\xE1tico, sem queixas relevantes. Exame f\xEDsico dentro da normalidade.</p>",
            diagnosis: "<p>Quadro est\xE1vel, sem altera\xE7\xF5es significativas.</p>",
            requestedExams: "<ul><li>ECG</li><li>Exame de urina</li><li>Ultrassonografia abdominal</li></ul>",
            prescription: "<p>Vitamina D 2000UI - 1 c\xE1psula por dia</p>",
            memedLink: {
              text: "Conhe\xE7a a MEMED",
              url: "https://memed.com.br/"
            },
            notes: "<p>Agendar retorno em 6 meses.</p>",
            attachments: [
              { name: "ECG-Resultado.pdf", url: "#ecg" },
              { name: "Urina-Exame.pdf", url: "#urina" },
              { name: "US-Abdome.pdf", url: "#us" }
            ]
          },
          {
            day: "05",
            month: "jan",
            year: "2025",
            time: "09h15",
            title: "Consulta P\xF3s-Operat\xF3ria",
            subtitle: "Avalia\xE7\xE3o de Recupera\xE7\xE3o",
            report: "<p>Recupera\xE7\xE3o p\xF3s-cir\xFArgica dentro do esperado. Pequeno edema local.</p>",
            diagnosis: "<p>Boa evolu\xE7\xE3o p\xF3s-operat\xF3ria.</p>",
            requestedExams: "<ul><li>Ultrassonografia do local operado</li></ul>",
            prescription: "<p>Ibuprofeno 600mg - 1 comprimido a cada 8h por 3 dias</p>",
            memedLink: {
              text: "Conhe\xE7a a MEMED",
              url: "https://memed.com.br/"
            },
            notes: "<p>Retornar em 15 dias com resultado da ultrassonografia.</p>",
            attachments: [
              { name: "Guia-US-Controle.pdf", url: "#guia" }
            ]
          },
          {
            day: "19",
            month: "fev",
            year: "2025",
            time: "16h45",
            title: "Revis\xE3o Cardiol\xF3gica",
            subtitle: "Acompanhamento Anual",
            report: "<p>Paciente com hist\xF3rico de hipertens\xE3o arterial sist\xEAmica. Press\xE3o controlada.</p>",
            diagnosis: "<p>Hipertens\xE3o controlada com medica\xE7\xE3o.</p>",
            requestedExams: "<ul><li>MAPA 24h</li><li>Holter</li><li>Eco Doppler card\xEDaco</li></ul>",
            prescription: "<p>Losartana 50mg - 1 comprimido pela manh\xE3</p>",
            memedLink: {
              text: "Conhe\xE7a a MEMED",
              url: "https://memed.com.br/"
            },
            notes: "<p>Voltar em 3 meses com os exames realizados.</p>",
            attachments: [
              { name: "Mapa-Solicita\xE7\xE3o.pdf", url: "#mapa" },
              { name: "Holter-Solicita\xE7\xE3o.pdf", url: "#holter" },
              { name: "EcoDoppler-Solicita\xE7\xE3o.pdf", url: "#eco" }
            ]
          }
        ]
      }
    };
  }
  throw createError({ statusCode: 404, message: "Paciente n\xE3o encontrado" });
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
