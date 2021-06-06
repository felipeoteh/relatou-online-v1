
const talks = [
    {
        id: 1,
        dateTalk: "06/06",
        assuntoTalk: "Assunto da Talk",
        contentTalk: "Lorem ipsum",
        quemAtendeu: "Felipe",
        canalAtendimento: "Whatsapp",
        quemConversou: "Fulano",
        teraRetorno: "Não",
        dataRetorno: "08/06",
        gerouTarefa: "Não",
        slug: "branco",
        status: "ativo"
    },
    {
        id: 2,
        dateTalk: "06/06",
        assuntoTalk: "Assunto da Talk",
        contentTalk: "Lorem ipsum",
        quemAtendeu: "Felipe",
        canalAtendimento: "Whatsapp",
        quemConversou: "Fulano",
        teraRetorno: "Não",
        dataRetorno: "08/06",
        gerouTarefa: "Não",
        slug: "benova",
        status: "ativo"
    },
    {
        id: 3,
        dateTalk: "06/06",
        assuntoTalk: "Assunto da Talk",
        contentTalk: "Lorem ipsum",
        quemAtendeu: "Felipe",
        canalAtendimento: "Whatsapp",
        quemConversou: "Fulano",
        teraRetorno: "Não",
        dataRetorno: "08/06",
        gerouTarefa: "Não",
        slug: 'benova',
        status: "ativo"
    }
]

export default (req, res) => {  
    const slugUrl = req.query
    console.log(slugUrl)
    const returTalks = talks.filter(item => (item.slug == slugUrl) )
    res.json(returTalks)
}
