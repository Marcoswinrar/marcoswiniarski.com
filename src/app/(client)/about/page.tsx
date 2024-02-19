import SocialMedia from "@/app/components/SocialMedia"
import SocialMediaLinks from "@/app/components/SocialMediaLinks"
import Link from "next/link"

const about = () => {
  return (
    <section className="mx-auto p-[2rem] text-justify xl:p-[7rem]">
      <h1 className={headerStyle}>Sobre mim</h1>
      <p className={pStyle}>Me chamo Marcos, nascido em Capitão Leônidas Marques/PR, trabalho como desenvolvedor front-end, escrevo um pouco nesse blog
        e curto muito um pedal.
      </p>
      <p className={pStyle}>
        Tenho alguns bons anos com experiência em desenvolvimento, passando por empresas como {''}
        <Link className={linkStyle} href={"https://site.sanepar.com.br/"} target="_blank">Sanepar</Link>, {''}
        <Link className={linkStyle} href={"https://www.mv.com.br/"} target="_blank">MVSistemas</Link> e {''}
        <Link className={linkStyle} href={"https://www.ambevtech.com.br/"} target="_blank">Ambev Tech</Link>.
        Cursei Tecnologia em Análise e Desenvolvimento de Sistemas pela Univel no ano de 2016. Adoro web, e o modo como ela conecta
        as pessoas através da tecnologia, desenvolvimento e dia a dia.
      </p>
      <p className={pStyle}>
        Adoro trabalhar em equipe e principalmente na modalidade remoto, sou comunicativo e gosto de ajudar as pessoas que estão interessadas
        em entrar no mundo do desenvolvimento.
      </p>
      <h1 className={headerStyle}>Contato</h1>
      <p className={pStyle}>
        Caso quiser, você pode entrar em contato comigo através das informações e links a baixo.
      </p>
      <SocialMedia hidden={false} />
      <SocialMediaLinks hidden={false} />
    </section>
  )
}

const headerStyle = `
  text-4xl
  mb-5
`

const pStyle = `
  mb-5
`

const linkStyle = `
  text-purple-500
`

export default about
