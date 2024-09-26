import React from 'react'
import theBigOne from "../images/blue/theBigOne.jpg"
import makeup from "../images/blue/menWatcher.jpg"
import perfumes from "../images/blue/womenWatches.jpg"
import perfumes2 from "../images/blue/accessories.jpg"
import hairCare from "../images/blue/smart.jpg"
import theSmallOne from "../images/blue/theSmallOne.jpg"
import { useState, useEffect } from 'react'


let images = [
	makeup, 
	perfumes,
	perfumes2,
	hairCare,
]

const BlueDiv = () => {

	let [heroImage, setHeroImage] = useState(window.innerWidth > 720 ? theBigOne : theSmallOne)

	let handleHeroImage = () => {
		if(window.innerWidth > 720) {
			setHeroImage(theBigOne)
		} else {
			setHeroImage(theSmallOne)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleHeroImage)

		return () =>  window.removeEventListener('resize', handleHeroImage)
	}, [])


	return (
		<div className={`flex flex-col justify-center items-center mt-10`} >
			<img className={`xl:w-[75rem]`} src={heroImage} alt="" />
			<div className={`flex slider-menu justify-start items-center overflow-scroll`} >
				{images.map((image) => {
					return <img className={`h-[9rem] justify-items-center md:h-[17rem] mx-4`} src={image} alt="" />
				})}
			</div>
		</div>
	)
}

export default BlueDiv
