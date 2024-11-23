import { menu } from "./pizzaMenu"



const DrinksCard = () => {
  return (
    <div>
          <div className="  text-white m-auto text-2xl w-11/12  ">
       
        {menu.coldDrinks.map( (item, i) => (
          <div key={i} className="bg-[#a07d6d] text-center flex justify-between items-center">
<div className="">

            <p >{item.name}</p>
            <p >{item.description}</p>
</div>
            <div className="">
            <p >{item.volume}</p>
            <p >{item.price}</p>
            </div>
          </div>
          
        ))}
          </div>
            

          

      
    </div>
  )
}

export default DrinksCard
