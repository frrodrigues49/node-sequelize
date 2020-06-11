// ----------------------------------------------------------------------Logar
/**
 * @api {post} /auth/authenticate Autenticação
 * @apiGroup Sistema
 * @apiVersion 1.0.0
 * @apiParam {String} email Email do Usuario
 * @apiParam {String} password Senha do Usuario
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 Ok
 * {
 * "user": {
 *  "id": 1,
 *  "email": "email@dominio.com",
 * },
 * "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY3NzA2MjIyLCJleHAiOjE1Njc3OTI2MjJ9.iZTuzf1h7yOzoGPQErbrDM8xgf5HWVwBrcAUdQjYtD0"
 * }
 * @apiErrorExample {json} Error:Email
 *    HTTP/1.1 400
 *     {
 *         "code": "400",
 *         "error": "User not found"
 *     }
 * @apiErrorExample {json} Error:Senha
 *    HTTP/1.1 400
 *     {
 *         "code": "400",
 *         "error": "Invalid password"
 *     }
 */

// ---------------------------------------------------------------------Cadastrar 
/**
* @api {post} /parceiro/registrar_ocorrencia Inserir Ocorrência
* @apiGroup Ocorrencia
* @apiVersion 1.0.0
* @apiParam {Char_(10)} numConhecimento Número do conhecimento
* @apiParam {Int_(4)} numOcorrencia Número da Ocorrencia
* @apiParam {DateTime} dataOcorrencia Data da Ocorrencia (Ex: 2019-11-25 10:00:00)
* @apiParam {Int_(11)} numeroNf Numero da Nota Fiscal
* @apiParam {Varchar_(5)} serieNf Série da Nota Fiscal
* @apiParam {Char_(8)} Usuario Usuario authenticado
* @apiParam {Char_(8)} codigoResponsavel Responsavel pela ocorrencia
* @apiParam {Char_(3)} Filial Id da Filial
* @apiParam {Char_(44)} chaveAcesso Chave de Acesso da Nota Fiscal 
* @apiParam {DateTime} dataAlteracao Data da Alteração (Ex: 2019-11-25 10:00:00)
* @apiParam {LongBlob} file Arquivo binario do comprovante
* @apiErrorExample {json} Error:Token nao informado
*    HTTP/1.1 401 - Unauthorized
*     {
*          "error": "No token provided"
*     }
* @apiErrorExample {json} Error:Token Errado
*    HTTP/1.1 401 - Unauthorized
*     {
*          "error": "Token error"
*     }
* @apiErrorExample {json} Error:Token Mal formado
*    HTTP/1.1 401 - Unauthorized
*     {
*          "error": "Token malformatted"
*     }
* @apiErrorExample {json} Error:Token Invalido
*    HTTP/1.1 401 - Unauthorized
*     {
*          "error": "Token invalid"
*     }
* @apiSuccessExample {json} Success
*    HTTP/1.1 200 Ok
*{
*  "Ocorren": {
*    "numConhecimento": "SPU76690",
*    "numOcorrencia": "1",
*    "dataOcorrencia": "2019-11-25 10:00:00",
*    "numeroNf": "Numero da Nf",
*    "serieNf": "Serie da Nf",
*    "Usuario": "Nome do Usuario",
*    "codigoResponsavel": "9999",
*    "Filial": "SAO",
*    "chaveAcesso": "Chave de Acesso da Nota Fiscal",
*    "dataAlteracao": "2019-11-25 10:00:00"
*  },
*  "protocolo": 1,
*  "Comprovante": {
*    "numConhecimento": "SPU76690",
*    "file": "9j/4AAQSkZJRgABAQEASABIAAD/4SMw...",
*    "dataInclusao": "2019-11-25 10:00:00"
*  },
*}
*@apiError Data
*     {
*           "error": "Nao é possivel aplicar ocorrencia com a data 2019-09-09 10:50:00 porque essa data e hora é maior do que a data e hora atual"
*     }
*@apiError Duplicidade
*     {
*           "error": "Ja existe um ocorrencia igual para esse conhecimento"
*     }
*@apiError Baixa
*     {
*           "error": "Nao é possivel aplicar nenhuma ocorrencia após dada ocorrencia 27 - conhecimento entregue."
*     }
*@apiError Taxa Extra
*     {
*           "error": "Pendente taxa extra"
*     }
*@apiError Ultima_Ocorrencia 
*     {
*           "error": "Nao é possivel aplicar ocorrencia 27 - conhecimento entregue - em conhecimento com última ocorrência bloqueada"
*     }
*@apiError Mesma_ocorrencia
*     {
*           "error": "Nao é possivel aplicar ocorrencia porque ela já é a ultima ocorrencia desse conhecimento."
*     }
*@apiError Data_Menor
*     {
*           "error": "Nao é possivel aplicar ocorrencia com a data menor ou igual à data e hora da ultima ocorrencia"
*     }
*/