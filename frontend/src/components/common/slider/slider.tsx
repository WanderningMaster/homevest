import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface IProps {
    className?: string;
    images?: string[];
}

const Sliders: React.FC<IProps> = ({className, images = []}) => {

    if (!images.length) {
        return <h1>NO IMAGES</h1>
    }

    return(
        <>
            <Slider
                {...{
                    dots: true,
                    swipeToSlide: true,
                    // prevArrow: <ArrowPrew />,
                    // nextArrow: <ArrowNext />,
                    dotsClass: `slick-dots`
                    
                }}
            >

                {
                    images.map((imageUrl:string) => {

                        return(
                            <div key={imageUrl}>
                                <img 
                                    src={imageUrl} 
                                    alt="Image Building" 
                                    className='rounded-t-lg max-h-80 w-full object-cover'
                                />
                            </div>
                        )
                        
                    })
                }

            </Slider>
        </>
    )
}

export default Sliders;