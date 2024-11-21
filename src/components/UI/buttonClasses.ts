import { Menu } from "../dataFIles/pizzaMenu"

export const buttonsClasses = {
    buttonMain: {
        class: `appearance-none bg-black border-2 border-gray-800
         rounded-lg text-white cursor-pointer font-sans font-semibold
          text-base leading-normal py-4 px-6 text-center w-full
           transition-transform duration-300 ease-out hover:shadow-md
            hover:translate-y-[-2px]`
      },
      buttonSecondary: {
        class: `bg-gray-800 text-white rounded-md border-none box-border cursor-pointer font-sans font-bold text-base leading-6
                  py-2 px-5 w-full text-center outline-none overflow-hidden transition-opacity duration-200 
                  hover:opacity-75 focus:opacity-75 disabled:opacity-50 disabled:pointer-events-none`
      },
      buttonFilter : {
        class: `bg-white text-gray-900 font-sans font-semibold text-sm leading-5
      rounded-md py-3 px-4 text-center shadow-sm border-0 
      hover:bg-gray-100 focus:outline-none focus:outline-2 focus:outline-transparent
      focus-visible:shadow-none cursor-pointer`,
        function: () => {console.log(Menu)

        }
    }
    }