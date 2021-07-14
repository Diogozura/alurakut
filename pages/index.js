import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfilesRelations'


function PrfileSidebar(propriedades) {
  return (
    <Box >
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>

      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box >
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id:'1164',
    title:'Ultimante Drift',
    image:'https://driftbrasil.com.br/wp-content/uploads/2020/05/download-4.png',
    url: 'https://discord.gg/CwDCKRgW'},
    {id:'171824',
    title:'Coisa nossa',
    image: 'https://yt3.ggpht.com/ytc/AKedOLTEh4JNF1wamGNoZLfCSJQ2A_MMRBv3kuJKgYSt=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://discord.com/invite/nY95yjB2',
  }
  ])
  const githubUser = 'diogozura'
  // const comunidades = ['alurakut']
  const pessoasFavoritas = [
    'omariosouto',
    'bugan',
    'rafaballerini',
    'bsao',
    'filipedeschamps',
    'gustavoguanabara'

  ]

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <PrfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O Que você deseja Fazer?</h2>
            <form onSubmit={function handleCriarComunidade(e){
                e.preventDefault()
                const dadosDoForms = new FormData(e.target)

                const comunidade = {
                  
                  id: new Date().toISOString(),
                  title: dadosDoForms.get('title'),
                  image: dadosDoForms.get('image'),
                  url: dadosDoForms.get('url'),
                }

                const comunidadesAtualizadas = [...comunidades, comunidade]
                setComunidades(comunidadesAtualizadas)
                
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?" 
                  type="text"/>
              </div>
              <div>
                <input
                  placeholder="coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="coloque uma URL para usarmos de capa" 
                  type="text"
                  />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div 
        className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades({comunidades.length})
            </h2>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={itemAtual.url}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul> 
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual} >
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>

                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
