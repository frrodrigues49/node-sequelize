define({ "api": [
  {
    "type": "post",
    "url": "/parceiro/registrar_ocorrencia",
    "title": "Inserir Ocorrência",
    "group": "Ocorrencia",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Char_(10)",
            "optional": false,
            "field": "numConhecimento",
            "description": "<p>Número do conhecimento</p>"
          },
          {
            "group": "Parameter",
            "type": "Int_(4)",
            "optional": false,
            "field": "numOcorrencia",
            "description": "<p>Número da Ocorrencia</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "dataOcorrencia",
            "description": "<p>Data da Ocorrencia (Ex: 2019-11-25 10:00:00)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int_(11)",
            "optional": false,
            "field": "numeroNf",
            "description": "<p>Numero da Nota Fiscal</p>"
          },
          {
            "group": "Parameter",
            "type": "Varchar_(5)",
            "optional": false,
            "field": "serieNf",
            "description": "<p>Série da Nota Fiscal</p>"
          },
          {
            "group": "Parameter",
            "type": "Char_(8)",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Usuario authenticado</p>"
          },
          {
            "group": "Parameter",
            "type": "Char_(8)",
            "optional": false,
            "field": "codigoResponsavel",
            "description": "<p>Responsavel pela ocorrencia</p>"
          },
          {
            "group": "Parameter",
            "type": "Char_(3)",
            "optional": false,
            "field": "Filial",
            "description": "<p>Id da Filial</p>"
          },
          {
            "group": "Parameter",
            "type": "Char_(44)",
            "optional": false,
            "field": "chaveAcesso",
            "description": "<p>Chave de Acesso da Nota Fiscal</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "dataAlteracao",
            "description": "<p>Data da Alteração (Ex: 2019-11-25 10:00:00)</p>"
          },
          {
            "group": "Parameter",
            "type": "LongBlob",
            "optional": false,
            "field": "file",
            "description": "<p>Arquivo binario do comprovante</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error:Token nao informado",
          "content": "HTTP/1.1 401 - Unauthorized\n {\n      \"error\": \"No token provided\"\n }",
          "type": "json"
        },
        {
          "title": "Error:Token Errado",
          "content": "HTTP/1.1 401 - Unauthorized\n {\n      \"error\": \"Token error\"\n }",
          "type": "json"
        },
        {
          "title": "Error:Token Mal formado",
          "content": "HTTP/1.1 401 - Unauthorized\n {\n      \"error\": \"Token malformatted\"\n }",
          "type": "json"
        },
        {
          "title": "Error:Token Invalido",
          "content": "HTTP/1.1 401 - Unauthorized\n {\n      \"error\": \"Token invalid\"\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Data",
            "description": "<p>{ &quot;error&quot;: &quot;Nao é possivel aplicar ocorrencia com a data 2019-09-09 10:50:00 porque essa data e hora é maior do que a data e hora atual&quot; }</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Duplicidade",
            "description": "<p>{ &quot;error&quot;: &quot;Ja existe um ocorrencia igual para esse conhecimento&quot; }</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Baixa",
            "description": "<p>{ &quot;error&quot;: &quot;Nao é possivel aplicar nenhuma ocorrencia após dada ocorrencia 27 - conhecimento entregue.&quot; }</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Taxa",
            "description": "<p>Extra { &quot;error&quot;: &quot;Pendente taxa extra&quot; }</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Ultima_Ocorrencia",
            "description": "<p>{ &quot;error&quot;: &quot;Nao é possivel aplicar ocorrencia 27 - conhecimento entregue - em conhecimento com última ocorrência bloqueada&quot; }</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Mesma_ocorrencia",
            "description": "<p>{ &quot;error&quot;: &quot;Nao é possivel aplicar ocorrencia porque ela já é a ultima ocorrencia desse conhecimento.&quot; }</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Data_Menor",
            "description": "<p>{ &quot;error&quot;: &quot;Nao é possivel aplicar ocorrencia com a data menor ou igual à data e hora da ultima ocorrencia&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 Ok\n{\n \"Ocorren\": {\n   \"numConhecimento\": \"SPU76690\",\n   \"numOcorrencia\": \"1\",\n   \"dataOcorrencia\": \"2019-11-25 10:00:00\",\n   \"numeroNf\": \"Numero da Nf\",\n   \"serieNf\": \"Serie da Nf\",\n   \"Usuario\": \"Nome do Usuario\",\n   \"codigoResponsavel\": \"9999\",\n   \"Filial\": \"SAO\",\n   \"chaveAcesso\": \"Chave de Acesso da Nota Fiscal\",\n   \"dataAlteracao\": \"2019-11-25 10:00:00\"\n },\n \"protocolo\": 1,\n \"Comprovante\": {\n   \"numConhecimento\": \"SPU76690\",\n   \"file\": \"9j/4AAQSkZJRgABAQEASABIAAD/4SMw...\",\n   \"dataInclusao\": \"2019-11-25 10:00:00\"\n },\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation/index.js",
    "groupTitle": "Ocorrencia",
    "name": "PostParceiroRegistrar_ocorrencia"
  },
  {
    "type": "post",
    "url": "/auth/authenticate",
    "title": "Autenticação",
    "group": "Sistema",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha do Usuario</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 Ok\n{\n\"user\": {\n \"id\": 1,\n \"email\": \"email@dominio.com\",\n},\n\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY3NzA2MjIyLCJleHAiOjE1Njc3OTI2MjJ9.iZTuzf1h7yOzoGPQErbrDM8xgf5HWVwBrcAUdQjYtD0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error:Email",
          "content": "HTTP/1.1 400\n {\n     \"code\": \"400\",\n     \"error\": \"User not found\"\n }",
          "type": "json"
        },
        {
          "title": "Error:Senha",
          "content": "HTTP/1.1 400\n {\n     \"code\": \"400\",\n     \"error\": \"Invalid password\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/documentation/index.js",
    "groupTitle": "Sistema",
    "name": "PostAuthAuthenticate"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/documentation/apidoc/main.js",
    "group": "_home_fagner_Documentos_projects_ApiKatarina_api_ocorrencias_cte_src_documentation_apidoc_main_js",
    "groupTitle": "_home_fagner_Documentos_projects_ApiKatarina_api_ocorrencias_cte_src_documentation_apidoc_main_js",
    "name": ""
  }
] });
