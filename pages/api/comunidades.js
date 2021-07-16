import { SiteClient } from 'datocms-client'
export default async function recebedorDeRequests(request, response) {

    if (request.method === 'POST') {
        const TOKEN = '5718960d9b40b3eb13270247c694d9'
        const client = new SiteClient(TOKEN);


        const registroCriado = await client.items.create({
            itemType: "968448", //Id criado pelo DATO
            ...request.body,
            // title: "Comunidade zura",
            // imageUrl: "https://github.com/diogozura.png",
            // url: "https://github.com/diogozura"
        })
        response.json({
            dados: 'TEM DADOS EM CASA?',
            registroCriado: registroCriado,
        })
        return;
    }
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}