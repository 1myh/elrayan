import React from 'react'
import theBigOne from "../images/green/theBigOne.jpg"
import makeup from "../images/green/dishwasher.jpg"
import perfumes from "../images/green/fredges.jpg"
import perfumes2 from "../images/green/cookers.jpg"
import hairCare from "../images/green/kitchenAmdDining.jpg"
import skinCare from "../images/green/microwave.jpg"
import shavingTools from "../images/green/rebotVacum.jpg"
import makeupTools from "../images/green/washingMachines.jpg"
import bathAndBody from "../images/green/waterDispensers.jpg"

let images = [
	makeup, 
	perfumes,
	perfumes2,
	hairCare,
	skinCare,
	shavingTools,
	makeupTools,
	bathAndBody
]

const GreenDiv = () => {
	return (
		<div className={`flex flex-col justify-center items-center mt-10`} >
			<img className={`w-fit`} src={theBigOne} alt="" />
			<div className={`grid justify-items-center md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2`} >
				{images.map((image) => {
					return <img className={`h-fit md:h-[8.5rem] lg:h-[10rem] xl:h-[8.5rem] m-4`} src={image} alt="" />
				})}
			</div>
		</div>
	)
}

export default GreenDiv
