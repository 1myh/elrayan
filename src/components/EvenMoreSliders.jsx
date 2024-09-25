import React from 'react'
import samsung from "../images/corps/samsung.png"
import idk from "../images/corps/hmm.png"
import sony from "../images/corps/sony.png"
import elrayan from "../images/corps/elrayan.png"
import hisense from "../images/corps/hisense.png"
import apple from "../images/corps/apple.png"
import tcl from "../images/corps/tcl.png"
import lg from "../images/corps/lg.png"
import braun from "../images/corps/braun.png"
import hwawei from "../images/corps/hwawei.png"
import phillips from "../images/corps/phillips.png"
import transmart from "../images/corps/tronsmart.png"



let corps = [
	samsung,
	idk,
	sony,
	elrayan,
	hisense,
	apple,
	tcl,
	lg,
	braun,
	hwawei,
	phillips,
	transmart
]


const EvenMoreSliders = () => {
	return (
		<div className={`flex overflow-scroll justify-start items-center w-88 xl:w-[70rem] mt-20`} >
			{corps.map((corp) => {
				return <img className={` h-36 xl:h-[10rem] mx-4`} src={corp} alt="" />
			})}
		</div>
	)
}

export default EvenMoreSliders
