import { Menu } from "./dataFIles/pizzaMenu";
import Button from "./UI/Button";
import { buttonsClasses } from "./UI/ButtonClasses";

const Card = () => {
  return (
    <div className="flex justify-center p-4 mx-10">
      <div className="">
        <img
          src="https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg"
          alt=""
          className="w-full"
        />
        <div className=" relative min-h-56 max-h-56 min-w-min p-3 border rounded-xl border-cyan-400 my-2 bg-white">
          <h3  className="text-xl text-start font-bold">
            {" "}
            Pizza Sresi
          </h3>
          <p className="w-full">pomodoro san marzano DOP, mozzarella fior di latte, pecorino DOP, oliwa, bazylia</p>
          <p className="absolute bottom-2 left-2">27zl</p>
          <div className=" flex justify-center w-1/2 m-auto pt-10">

          <Button className={buttonsClasses.buttonSecondary.class} children="MenuOpen" onClick={()=> console.log(Menu)} disabled={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
