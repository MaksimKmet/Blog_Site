import { Menu } from "./pizzaMenu"

const Card = () => {
  return (
    <div className="flex justify-center p-4">
        <div className="">

      <img src="https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg" alt="" width={"200px"} />
      <h3 onClick={()=> console.log(Menu)} className="text-center"> Pizza z serem</h3>
        </div>
    </div>
  )
}

export default Card
