import { NavLink } from "react-router-dom";
import Button from "./UI/Button";
import { buttonsClasses } from "./UI/buttonClasses";
import { TiLocationArrow } from "react-icons/ti";
import DateChecker from "../logic/DateChecker";

const Footer = () => {
  return (
    <div className="font-bold bg-amber-300 cursor-default ">
      <section className="flex">
        <img
          src="/src/assets/267721291_3095253420744463_3586122816518255038_n.jpg"
          alt=""
          width={"175px"}
          className="rounded-full"
        />
        <div className="w-1/5 flex  items-center   justify-end">
          <Button
            children={"Garnizon"}
            disabled={false}
            className={buttonsClasses.buttonMap.class}
          />
        </div>
      </section>
      <section className="flex m-auto w-2/3 justify-between items-center">
        <article className="w-2/3 ">
          <NavLink className={"hover:underline "} to="/Contact">
            Contact Us
          </NavLink>
        </article>
        <article className="w-2/3 ">
          <h1>Location</h1>

          <p>Somewhrere posible </p>

          <div className="flex justify-start items-center hover:underline">
            <a href="#"> Google map</a>
            <TiLocationArrow className="mx-2" />
          </div>
        </article>
        <article className="w-2/3 ">
          <h1>Hour</h1>
          <div className="flex">
            <p className="mr-3">Today:</p>
            <DateChecker />
          </div>
        </article>
        <article className="w-2/3 ">
          <h1>CONTACTS.</h1>
          <a className="hover:underline" href="tel:+48733460471">
            +48 733 460 471
          </a>{" "}
          <p>Morena</p>
          <a className="hover:underline" href="tel:+48791347770">
            +48 791 347 770
          </a>{" "}
          <p>Garnizon</p>
          <a className="hover:underline" href="mailto:someone@example.com">
            mail to us
          </a>
        </article>
      </section>
      <section>© 2024 Wloszczyzna Pizza | Site made by Maksim Kmet</section>
    </div>
  );
};

export default Footer;
