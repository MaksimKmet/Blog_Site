import Button from "./UI/Button"
import { buttonsClasses } from "./UI/buttonClasses"

interface stateProps {
    state: (arg0:string)=> void
}

const GroupOfButtons = ({state}: stateProps) => {



  return (
    <div className=" w-1/2 grid grid-cols-3 gap-2 m-auto max-h-32 my-4  ">
    <Button children="Pizze" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={()=> state('pizza')}
    />
    <Button children="Przystawki" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={()=> state('appetizer')}


    />
    <Button children="Napoje" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={()=> state('drinks')}


    />

    <Button children="Desery" disabled={false} 
    className={buttonsClasses.buttonFilter.class}
    onClick={()=> state('desert')}


    />
    
    
    </div>
  )
}

export default GroupOfButtons
