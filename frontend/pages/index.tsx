import CardImage from "../components/CardImage";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">
        Site destinado a prática de estudos. Tecnologias usadas: Next.js, TailwindCSS e Framer Motion
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 ">
        <CardImage
          href="/aboutme"
          imgSrc="/img/person.png"
          layoutId="aboutme-img"
        />

        <CardImage
          href="/contact"
          imgSrc="https://www.flaticon.com/svg/vstatic/svg/1250/1250973.svg?token=exp=1613161220~hmac=87cfd53061648b8e4a9551e312a43efe"
          layoutId="contact-img"
        />
      </div>
    </div>
  );
};