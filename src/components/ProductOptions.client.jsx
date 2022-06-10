import {useProduct} from '@shopify/hydrogen/client';
import IconButton from '@mui/material/IconButton';

/**
 * A client component that tracks a selected variant and/or selling plan state, as well as callbacks for modifying the state
 */
export default function ProductOptions() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  console.log('OPtions', options);
  return (
    <div className="flex flex-col justify-between w-full mt-3">
      {options.map(({name, values}) => {
        if (name !== 'Title') {
          return (
            <fieldset key={name} className="mb-2 w-fit">
              <legend className="gap-2 mb-2 text-xl text-black w-fit ">
                {name}
              </legend>
              <div className="flex flex-wrap items-center justify-between w-full gap-4 mx-auto ">
                {values.map((value) => {
                  const checked = selectedOptions[name] === value;
                  const id = `option-${name}-${value}`;

                  return (
                    <label key={id} htmlFor={id}>
                      <input
                        className="sr-only"
                        type="radio"
                        id={id}
                        name={`option[${name}]`}
                        value={value}
                        checked={checked}
                        onChange={() => setSelectedOption(name, value)}
                      />

                      <div
                        className={`border-2 flex   cursor-pointer rounded-full text-sm md:text-md text-center justify-center h-16 w-16 md:h-18 md:w-18 ${
                          checked
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'text-blue-500 border-blue-300'
                        }`}
                      >
                        <h1 className="mx-auto my-auto w-fit"> {value}</h1>
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          );
        }
      })}
    </div>
  );
}
