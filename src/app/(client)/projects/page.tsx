import { Metadata } from "next"
import Header from "@/app/components/Header"
import ProjectCard from "@/app/components/ProjectCard"

export const metadata: Metadata = {}

const Projects = () => {
  metadata.title = 'Projetos | Marcos Eduardo Winiarski'

  return (
    <section className="mx-auto p-[2rem] xl:p-[7rem]">
      <Header title="Projetos" />
      <section className="flex flex-col xl:flex-row flex-wrap justify-center mx-auto">
        <ProjectCard
          imageUrl={"https://raw.githubusercontent.com/Marcoswinrar/pokedex/main/public/tela01.png"}
          imageDescription="Foto inicial da pokedex desenvolvida em reactJS"
          projectLink="https://pokedex.marcoswinrar.com"
          repoLink="https://github.com/Marcoswinrar/pokedex"
          caption={`Pokedex desenvolvida em React, Typescript e testes unitários.`}
        />
        <ProjectCard
          imageUrl={"https://github.com/Marcoswinrar/marcoswinrar.com/assets/46204917/afa0810a-8772-4126-ae2e-5188458dd0f6"}
          imageDescription="Foto inicial da meu próprio blog"
          projectLink="https://marcoswinrar.com"
          repoLink="https://github.com/Marcoswinrar/marcoswinrar.com"
          caption={`Meu blog pessoal(NextJS, TailwindCSS e Sanity-cms)`}
        />
        <ProjectCard
          imageUrl={"https://github.com/Marcoswinrar/exacta-challenge/assets/46204917/2a17a96c-650a-4467-9125-6bdb0aaf2629"}
          imageDescription="Tela inicial com um cadastro de usuários."
          projectLink="https://cadastro.marcoswinrar.com"
          repoLink="https://github.com/Marcoswinrar/exacta-challenge"
          caption={`Desafio de cadastro de usuário feito em ReactJS e com testes unitários.`}
        />
      </section>
    </section>
  )
}

export default Projects;
