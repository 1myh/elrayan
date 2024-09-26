import React, { useEffect, useState } from 'react'
import theBigOne from "../images/orange/theBigOne.jpg"
import mobiles from "../images/orange/mobiles.jpg"
import computing from "../images/orange/computing.jpg"
import tablets from "../images/orange/tablets.jpg"
import gaming from "../images/orange/gaming.jpg"
import accessories from "../images/orange/accessories.jpg"
import monitors from "../images/orange/monitors.jpg"
import TVs from "../images/orange/tvs.jpg"
import headphones from "../images/orange/headphones.jpg"
import s24 from "../images/orange/samsung.png"
import xiaomi12Pro from "../images/orange/xiaomi12Pro.png"
import hwaweiPura70 from "../images/orange/hwaweiPura70.jpg"
import sony from "../images/orange/sony.png"
import samsungScreen from "../images/orange/samsungScreen.png"
import tcl from "../images/orange/tcl.jpg"
import tclAgain from "../images/orange/tclAgain.png"
import nentendo from "../images/orange/nentendo.jpg"
import ps5 from "../images/orange/ps5.jpg"
import ps5ButBigger from "../images/orange/ps5ButBigger.png"
import xbox from "../images/orange/xbox.png"
import charger from "../images/orange/charger.jpg"
import airpodsMax from "../images/orange/airpodsMax.jpg"
import hwaweiWatch from "../images/orange/hwaweiWatch.jpg"
import theSmallOne from "../images/orange/theSmallOne.jpg"

let images = [
	mobiles,
	computing,
	gaming,
	tablets,
	accessories,
	monitors,
	TVs,
	headphones
]

const OrangeDiv = () => {
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
			<div className={`grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2`} >
				{images.map((image) => {
					return <img className={`h-fit md:h-[8.5rem] lg:h-[10rem] xl:h-[8.5rem] mx-4`} src={image} alt="" />
				})}
			</div>
			
			<div className={`grid md:grid-cols-2 xl:flex`} >

				<div className={`flex flex-col my-10 md:my-5 justify-center items-center mx-3 rounded-md px-3`} >
					<h1 className={`text-lg font-bold`}>our picks for mobiles</h1>
					<div className={`grid grid-cols-2 grid-rows-2`} >
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={xiaomi12Pro} alt="" /><h1>xiaomi 12 Pro</h1></div>
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={s24} alt="" /><h1>samsung galaxy s24 ultra</h1></div>
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={hwaweiPura70} alt="" /><h1>hwawei Pura 70</h1></div>
					</div>
				</div>

				<div className={`flex flex-col my-10 md:my-5 justify-center items-center mx-3 rounded-md px-3`} >
					<h1 className={`text-lg font-bold`}>our picks for TVs</h1>
					<div className={`grid grid-cols-2 grid-rows-2`} >
						<div className={`flex flex-col mx-3 text-sm justify-center items-center`}><img className={`h-24`} src={samsungScreen} alt="" /><h1>samsung 65 inch</h1></div>
						<div className={`flex flex-col md:mx-3 text-sm justify-center items-center`}><img className={`h-24`} src={sony} alt="" /><h1>sony 55 inch x75</h1></div>
						<div className={`flex flex-col md:mx-3 text-sm justify-center items-center`}><img className={`h-24`} src={tclAgain} alt="" /><h1>tcl 65 inch c655</h1></div>
						<div className={`flex flex-col md:mx-3 text-sm justify-center items-center`}><img className={`h-24`} src={tcl} alt="" /><h1>tcl 65 inch c655</h1></div>
					</div>
				</div>

				<div className={`flex flex-col my-10 md:my-5 justify-center items-center mx-3 rounded-md px-3`} >
					<h1 className={`text-lg font-bold`}>our picks for gaming</h1>
					<div className={`grid grid-cols-2 grid-rows-2`} >
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={ps5} alt="" /><h1>sony ps5 portal</h1></div>
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={nentendo} alt="" /><h1>nentendo 64gb</h1></div>
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={xbox} alt="" /><h1>xbox series x</h1></div>
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={ps5ButBigger} alt="" /><h1>sony playstation 5</h1></div>
					</div>
				</div>

				<div className={`flex flex-col my-10 md:my-5 justify-center items-center mx-3 rounded-md px-3`} >
					<h1 className={`text-lg font-bold`}>discounted electronics</h1>
					<div className={`grid grid-cols-2 grid-rows-2`} >
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={charger} alt="" /><h1>20w usb-c power adapter</h1></div>
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={airpodsMax} alt="" /><h1>apple airpods max</h1></div>
						<div className={`flex flex-col text-sm justify-center items-center`}><img className={`h-24`} src={hwaweiWatch} alt="" /><h1>hwawei molly b19</h1></div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default OrangeDiv
