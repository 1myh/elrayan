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

const blueDiv = () => {
	return (
		<div className={`flex flex-col justify-center items-center mt-10`} >
			<img className={`h-80`} src={theBigOne} alt="" />
			<div className={`grid grid-cols-4 grid-rows-2`} >
				{images.map((image) => {
					return <img className={`h-[17rem] m-4`} src={image} alt="" />
				})}
			</div>
		</div>
	)
}

export default blueDiv
