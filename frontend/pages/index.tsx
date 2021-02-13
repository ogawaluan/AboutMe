import CardImage from '../components/CardImage';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">
        Site for the practice of studies. Technologies used: Next.js, TailwindCSS and Framer Motion 
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 ">
        <CardImage
          href="/aboutme"
          imgSrc="/img/person.png"
          layoutId="aboutme-img"
        />

        <CardImage
          href="/contact"
          imgSrc="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/MessageSent-256.png"
          layoutId="contact-img"
        />

        <CardImage
          href="/tecnologies"
          imgSrc="https://cdn4.iconfinder.com/data/icons/thin-line-icons-for-seo-and-development-1/64/seo_programming-256.png"
          layoutId="tecnologies-img"
        />
      </div>
    </div>
  );
};