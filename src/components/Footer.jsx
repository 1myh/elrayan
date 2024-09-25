import React from 'react'
import elrayanBlue from "../images/elrayanBlue.svg"
import appStore from "../images/appstore.png"
import googlePlay from "../images/googlePlay.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import youtube from "../images/youtube.svg"
import facebook from "../images/facebook.svg"
import tiktok from "../images/tiktok.svg"
import instagram from "../images/instagram.svg"

let socials = [facebook, instagram, tiktok, youtube]

let onlnieShopping = [
  "Customer Questions",
  "Customer Service",
  "Rewards",
  "Delivery",
  "Payment Methods",
  "Return and Exchange Policy",
  "Privacy Policy, Terms and Conditions",
];


const Footer = () => {
	return (
		<div className={`flex justify-around items-start w-full bg-slate-100 py-20`} >

			<div className={`lg:flex justify-center items-start hidden w-full`} >
				<div className={`flex flex-col max-w-[16rem] mx-5 justify-center items-start`} >
					<img className={`my-3`} src={elrayanBlue} alt="" />
					<p className={`break-words my-3 whitespace-pre-wrap overflow-hidden`} >
						elryan.com is the first online store in Iraq to provide a range of consumer electronics from world renowned brands delivered to your home within 24 hours.
					</p>
					<div className={`flex my-3 h-7`} >
						<img className={`mx-3 cursor-pointer`} src={appStore} alt="" />
						<img className={`mx-3 cursor-pointer`} src={googlePlay} alt="" />
					</div>
				</div>

				<div className={`flex flex-col justify-start items-start mx-5`} >
					<h1 className={`text-3xl mb-4 font-bold`} >About El Ryan</h1>
					<p className={`my-3 cursor-pointer`} >About Elryan.com</p>
					<p className={`my-3 cursor-pointer`} >Price Matching Policy</p>
					<p className={`my-3 cursor-pointer`} > Jobs </p>
					<p className={`my-3 cursor-pointer`} >Sell on elryan.com</p>
				</div>

				<div className={`mx-5`} >
					<h1 className={`font-bold text-3xl`} >Online Shopping</h1>
					{onlnieShopping.map((p) => {
						return <p className={`my-3 cursor-pointer`} key={p} >{p}</p>
					})}
				</div>

				<div className={`flex flex-col justify-start items-start mx-5`} >
					<h1 className={`font-bold text-3xl mb-3`} >Customer Service</h1>
					<p className={`my-3 text-indigo-500 cursor-pointer`} ><FontAwesomeIcon className={`mr-3`} icon={faPhone} /> 80010808 </p>
					<p className={`my-3 text-indigo-500 cursor-pointer`} ><FontAwesomeIcon className={`mr-3`} icon={faEnvelope} /> online@elryan.com</p>
					<h1 className={`text-3xl font-bold my-3`} >Follow us</h1>
					<div className={`flex justify-start my-3`} >
						{socials.map((link) => {
							return <img className={`h-8 mr-5 cursor-pointer`} src={link} alt="" />
						})}
					</div>
				</div>
			</div>

			<div className={`lg:hidden flex flex-col justify-center items-center`}>
				<img src={elrayanBlue} alt="" />
				<div className={`flex justify-center items-center my-5`} >
					<img className={`w-32 mx-3`} src={appStore} alt="" />
					<img className={`w-36 mx-3`} src={googlePlay} alt="" />
				</div>
				<p className={`my-3 text-indigo-500 cursor-pointer`} ><FontAwesomeIcon className={`mr-3`} icon={faPhone} /> 80010808 </p>
				<p className={`my-3 text-indigo-500 cursor-pointer`} ><FontAwesomeIcon className={`mr-3`} icon={faEnvelope} /> online@elryan.com</p>
				<div className={`flex justify-center items-center my-5`} >
				{socials.map((link) => {
							return <img className={`h-10 mr-5 cursor-pointer`} src={link} alt="" />
						})}
				</div>
			</div>
		</div>
	)
}

export default Footer
