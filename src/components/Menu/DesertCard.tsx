import { menu } from "./pizzaMenu"

const DesertCard = () => {
  return (
    <div>
      <h1>Desert</h1>
      <div>
          <div className="  text-white m-auto text-2xl w-11/12  ">
       
        {menu.desserts.map( (item, i) => (
          <div key={i} className="bg-[#a07d6d] text-center flex justify-between items-center">
<div className="">

            <p >{item.available}</p>
            <p >{item.name}</p>
</div>
            <div className="">
            <p >{item.price}</p>
            </div>
          </div>
          
        ))}
          </div>
            

          

      
    </div>
    </div>
  )
}

export default DesertCard
