import Image from "next/image"

const Avatar = () => {
  return (
    <section className="avatar-profile flex xl:flex-col items-center xl:my-3 xl:my-6 text-sm xl:text-base">
      <figure className="w-[3rem] xl:w-max xl:h-max mr-6 xl:mr-0">
        <Image
          className="mx-3 xl:mx-6 xl:mx-auto rounded-full bg-indigo-500"
          alt="Foto minha de perfil, com terno e sorrindo."
          src={"https://avatars.githubusercontent.com/u/46204917?v=4"}
          width={"84"}
          height={"84"}
        />
      </figure>
      <div className="text-center my-3">
        <h1 className="xl:text-2xl">Marcos Eduardo Winiarski</h1>
        <small>Front-end Developer</small>
      </div>
      <div className="hidden xl:block text-center mx-6 my-3">
        <p>Desenvolvedor front-end, ciclista e blogueiro. Escrevo algumas bobagens sobre front-end. </p>
      </div>
    </section>
  )
}

export default Avatar
