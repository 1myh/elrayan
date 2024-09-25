import React from 'react'
import theBigOne from "../images/purple/theBigOne.jpg"
import makeup from "../images/purple/makeup.jpg"
import perfumes from "../images/purple/perfumes.jpg"
import perfumes2 from "../images/purple/perfumes2.jpg"
import hairCare from "../images/purple/hairCare.jpg"
import skinCare from "../images/purple/skinCare.jpg"
import shavingTools from "../images/purple/shavingTools.jpg"
import makeupTools from "../images/purple/makeupTools.jpg"
import bathAndBody from "../images/purple/bathAndBody.jpg"

import christianDior from "../images/purple/christianDior.png"
import avon from "../images/purple/avon.png"
import balm from "../images/purple/balm.png"
import essintial from "../images/purple/essential.png"
import loreal from "../images/purple/loreal.png"


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

let slidyImages = [
	christianDior,
	avon,
	balm,
	essintial,
	loreal
]

const PurpleDiv = () => {
	return (
		<div className={`flex flex-col justify-center items-center mt-10`} >
			<img className={`h-fit`} src={theBigOne} alt="" />
			<div className={`grid justify-items-center md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2`} >
				{images.map((image) => {
					return <img className={`h-fit md:h-[8.5rem] lg:h-[10rem] xl:h-[8.5rem] m-4`} src={image} alt="" />
				})}
			</div>

			<div className={`flex justify-start overflow-scroll items-center mt-5`} >
				{slidyImages.map((image) => {
					return <img className={`h-32 md:h-[8.5rem] xl:h-[13rem] m-4`} src={image} alt="" />
				})}
			</div>
		</div>
	)
}

export default PurpleDiv
