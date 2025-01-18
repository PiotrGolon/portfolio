import { companies, testimonials } from "@/data/index";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Testimonials from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="my-20">
        <h1 className="heading">
          Tech <span className="text-purple">environment</span>
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div
            key={id}
            className="flex items-center md:max-w-60 max-w-32 gap-2"
          >
            <img src={img} alt={name} className="md:w-10 w-5" />
            {id !== 5 ? (
              <p className="text-2xl font-semibold">{nameImg}</p>
            ) : null}
            {id === 5 && (
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
