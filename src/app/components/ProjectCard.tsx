import Image from "next/image"
import Link from "next/link"

interface Props {
  imageUrl: string
  imageDescription: string
  caption: string
  projectLink: string,
  repoLink: string
}

const ProjectCard = ({
  imageUrl,
  imageDescription,
  caption,
  projectLink,
  repoLink
}: Props) => {
  return (
    <div className="flex flex-col items-center xl:p-5 mb-5">
      <Link
        target="_blank"
        href={projectLink}>
        <figure>
          <div className="relative">
            <Image
              className="m-auto"
              width={510}
              height={510}
              src={imageUrl}
              alt={imageDescription}
            />
            <div
              style={{ backgroundColor: 'rgba(57, 57, 57, 0.6)' }}
              className="absolute top-0 w-[100%] h-[100%] flex justify-center items-center">
              <h3 className="text-lg">Visualizar</h3>
            </div>
          </div>
          <figcaption className="text-center">
            {caption}
          </figcaption>
        </figure>
      </Link >
      <Link
        href={repoLink}
        target="_blank"
        className="text-purple-500 hover:text-purple-400 py-2 text-center" >
        Repositório →
      </Link>
    </div>
  )
}

export default ProjectCard;
