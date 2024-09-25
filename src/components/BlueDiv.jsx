import React from 'react'
import theBigOne from "../images/blue/theBigOne.jpg"
import makeup from "../images/blue/menWatcher.jpg"
import perfumes from "../images/blue/womenWatches.jpg"
import perfumes2 from "../images/blue/accessories.jpg"
import hairCare from "../images/blue/smart.jpg"


let images = [
	makeup, 
	perfumes,
	perfumes2,
	hairCare,
]

const BlueDiv = () => {
	return (
		<div className={`flex flex-col justify-center items-center mt-10`} >
			<img className={`w-fit`} src={theBigOne} alt="" />
			<div className={`flex justify-start items-center overflow-scroll`} >
				{images.map((image) => {
					return <img className={`h-[7rem] justify-items-center md:h-[17rem] mx-4`} src={image} alt="" />
				})}
			</div>
		</div>
	)
}

export default BlueDiv
