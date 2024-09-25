import React from 'react'
import elrayan from "../images/elrayanLogo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'

const Header = () => {
	return (
		<>
			<div className={`w-full flex flex-col md:hidden justify-center text-white px-5 pt-3 pb-5 bg-fayaBlue items-center`} >
				<img className={`px-5 w-fit mb-3`} src={elrayan} alt="" />
				<input className={`rounded-md xl:w-[55rem] lg:w-[30rem] h-10 w-full text-black px-3`} type="text" />
				<button className={`px-5 md:flex justify-center items-center lg:text-[0.7rem] xl:text-[1rem] hidden cursor-pointer`} ><FontAwesomeIcon color='white' className={`xl:h-5 lg:h-3 pr-2`} icon={faUser} />Sign in or Sign up</button>
				<br />
				<button><FontAwesomeIcon className={`xl:h-5 lg:h-3 md:flex hidden`} icon={faCartShopping} /></button>
			</div>

			<div className={`w-full md:flex hidden justify-center text-white px-5 py-8 bg-fayaBlue items-center`} >
				<img className={`px-5 w-[13rem]`} src={elrayan} alt="" />
				<input className={`rounded-md xl:w-[55rem] lg:w-[30rem] h-10 w-full text-black px-3`} type="text" />
				<button className={`px-5 md:flex justify-center items-center xl:text-[1rem] hidden cursor-pointer`} ><FontAwesomeIcon color='white' className={`xl:h-5 lg:h-3 pr-2`} icon={faUser} />Sign in or Sign up</button>
				<br />
				<button><FontAwesomeIcon className={`xl:h-5 lg:h-3 md:flex hidden`} icon={faCartShopping} /></button>
			</div>
		</>
	)
}

export default Header
