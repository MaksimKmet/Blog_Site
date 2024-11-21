import Button from "./Button"
import { buttonsClasses } from "./ButtonClasses"

const GroupOfButtons = () => {
  return (
    <div className=" w-1/2 grid grid-cols-3 gap-2 m-auto max-h-32 my-4  ">
    <Button children="Pizze" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={buttonsClasses.buttonFilter.function}
    />
    <Button children="Przystawki" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={buttonsClasses.buttonFilter.function}
    />
    <Button children="Napoje" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={buttonsClasses.buttonFilter.function}
    />

    <Button children="Desery" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={buttonsClasses.buttonFilter.function}
    />
    
    </div>
  )
}

export default GroupOfButtons
