import React from 'react';
import './rangeMultipleStyle.css'

interface Props {
    min?: number,
    max?: number,
}

const  MultipleRange: React.FC<Props> = ({min = 0, max = 100}) => {
    const [minValue, setMinValue] = React.useState(min);
    const [maxValue, setMaxValue] = React.useState(max);
    const minValRef: React.RefObject<HTMLInputElement> = React.useRef(null);
    const maxValRef: React.RefObject<HTMLInputElement> = React.useRef(null);
    const range: React.RefObject<HTMLDivElement> = React.useRef(null);

    const getPercent = React.useCallback((value) => {
        return Math.round(((value - min) / (max - min)) * 100);
    }, [min, max]);
    
    React.useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minValue);
            const maxPercent = getPercent(maxValRef.current.value);
            console.log(minPercent);
            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
              }
        }
    }, [minValue, getPercent]);

    React.useEffect(() => {
        if (minValRef.current) {
          const minPercent = getPercent(+minValRef.current.value);
          const maxPercent = getPercent(maxValue);
      
          if (range.current) {
           range.current.style.width = `${maxPercent - minPercent}%`;
          }
        }
    }, [maxValue, getPercent]);


    function validateInputMin(value:any):boolean {
        if (value >= min && value <= max && value < maxValue) {
            return false;
        }
        return true;
    }

    function validateInputMax(value:any):boolean {
        if (value >= min && value >= minValue && value <= max ) {
            return false;
        }
        return true;
    }

    function hanlerMinValue(e:any) {
        if (validateInputMin(e.target.value)) {
            return
        }

        setMinValue(e.target.value)
    }

    function hanlerMaxValue(e:any) {
        if (validateInputMax(e.target.value)) {
            return
        }

        setMinValue(e.target.value)
    }

    return(
        <div className='flex gap-1 w-full flex-col relative'>
            <input 
                type="range"
                min={min}
                max={max}
                value={minValue}
                ref={minValRef}
                onChange={(e) => {
                    const value = Math.min(+e.target.value, maxValue - 1);
                    setMinValue(value);
                    e.target.value = value.toString();
                }}
                className='thumb thumb--zindex-3'
            />
            <input 
                type="range"
                min={min}
                max={max}
                value={maxValue}
                ref={maxValRef}
                onChange={(e) => {
                    const value = Math.max(+e.target.value, minValue + 1);
                    setMaxValue(value);
                    e.target.value = value.toString();
                }}
                className='thumb thumb--zindex-4'
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
            </div>
            <div className='flex flex-row mt-4 justify-between'>
                <input 
                    type="number" 
                    name="minValue"
                    value={minValue} 
                    className="border-2 text-center"
                    onChange={(e) => hanlerMinValue(e)}
                    placeholder="min"
                />
                <input 
                    type="text" 
                    name="maxValue"
                    value={maxValue} 
                    className="border-2 text-center"
                    onChange={(e) => hanlerMaxValue(e)}
                    placeholder="max"
                />
            </div>
        </div>
    )
}

export default MultipleRange