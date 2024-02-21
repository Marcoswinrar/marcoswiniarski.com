import Header from "@/app/components/Header"
import ProjectCard from "@/app/components/ProjectCard"

const Projects = () => {
  return (
    <section className="mx-auto p-[2rem] xl:p-[7rem]">
      <Header title="Projects" />
      <section className="flex flex-col xl:flex-row flex-wrap justify-center mx-auto">
        <ProjectCard
          imageUrl={"https://raw.githubusercontent.com/Marcoswinrar/pokedex/main/public/tela01.png"}
          imageDescription="Foto inicial da pokedex desenvolvida em reactJS"
          projectLink="https://github.com/Marcoswinrar/pokedex"
          repoLink="https://github.com/Marcoswinrar/pokedex"
          caption={`Pokedex desenvolvida em React`}
        />
      </section>
    </section>
  )
}

export default Projects;
