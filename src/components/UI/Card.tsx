import { Menu } from "../dataFIles/pizzaMenu";
// import Button from "./Button";
// import { buttonsClasses } from "./ButtonClasses";




const Card = () => {
// const [render, setRender] = 
const pizzaItem = Menu.Garnizon.Pizza
// const PreItem = Menu.


  return (
    <div className="grid grid-cols-3 w-10/12 m-auto ">
      {pizzaItem.map((item, i) => (
      <div key={i} className="flex justify-center p-4 mx-10">
        <div className="relative">
          { item.Cena === '17' || item.Cena ===  '20'? 
          <div className="absolute right-0 top-0">
            <p className="bg-white p-2 border rounded-2xl">Only on Garnizon</p>
          </div>:null
        }
          <img
            src="https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg"
            alt=""
            className="w-full"
          />
          <div className=" relative min-h-40 max-h-40 min-w-min p-3 border rounded-xl border-cyan-400 my-2 bg-white">
            <h3 className="text-xl text-start font-bold"> {item.Nazwa}</h3>
            <p className="w-full">
              {item.Składniki}
            </p>
            <p className="absolute bottom-2 left-2">{item.Cena} zl</p>
            {/* <div className=" flex justify-center w-1/2 m-auto pt-10">
             <Button children="hi" disabled={false} className={buttonsClasses.buttonMain.class} onClick={()=>console.log(i, item)}/>
            </div> */}
          </div>
        </div>
      </div>
      ))}

    </div>
  );
};

export default Card;
