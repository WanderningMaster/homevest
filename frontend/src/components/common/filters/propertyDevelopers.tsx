import React from "react";
import home_icon from 'assets/images/home-icon.svg';

interface ICompany {
    id: string,
    company: string
}

interface IProps {
    property?: ICompany[],
    propertySelect?: string[],
    isVisible?: boolean,
    handlerVisible?: () => void,
    returnPropertyDevelopers: (value: string[]) => void
}

const PropertyDevelopers: React.FC<IProps> = ({ property = [], propertySelect = [], isVisible = false, handlerVisible, returnPropertyDevelopers }) => {

  const [selectProperty, setSelectProperty] = React.useState(propertySelect);

  function handlerSetSelectProperty(value:string) {
      if (selectProperty.indexOf(value) !== -1) {
          const result = selectProperty.filter((item:string) => item !== value);
          setSelectProperty(result);

          return
      }

      setSelectProperty([...selectProperty, value])
  }
    
  function handlerReturnSelectProperty() {
    returnPropertyDevelopers(selectProperty);
  }

  function handlerResetAllFilters() {
      setSelectProperty([]);
      handlerReturnSelectProperty();
  }

  return (
    <>
      <div className="w-full">
        <button onClick={handlerVisible} className="w-full border-2 border-light-grey rounded-md flex items-center justify-between leading-7	px-2 text-green text-body-small">
          Property developers
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className={(isVisible ? '' : 'hidden ') + 'absolute bg-white font-medium grid grid-cols-2 left-0 mt-2 px-4 py-2 rounded-md shadow-card text-body-large text-left w-full z-10'}>
            {
              !property.length ? 
              <h1>Company Not found</h1> :
              property.map(({id, company}:ICompany) => {
                return (
                    <button 
                        key={id}
                        className={
                          (propertySelect.indexOf(id) != -1 ? 'bg-light-grey ' : '') + 
                          'flex gap-3 items-center text-left py-3 pl-3 hover:bg-light-grey'
                        }
                        onClick={() => handlerSetSelectProperty(id)}
                    >
                        <img src={home_icon} alt="home-icon" className="-mt-1.5 w-6 h-6"/>
                        {company}
                    </button>
                )
            })}

            <div>
                <button 
                    onClick={() => handlerResetAllFilters() }
                >
                    Reset All Fiters
                </button>
                <button
                    onClick={() => handlerReturnSelectProperty()}
                >
                    Show
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDevelopers;