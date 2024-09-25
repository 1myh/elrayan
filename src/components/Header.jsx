import React from 'react'
import elrayan from "../images/elrayanLogo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'

const Header = () => {
	return (
		<div className={`w-full text-white py-8 bg-indigo-500 flex justify-center align-baseline`} >
			<img className={`px-5 h-10`} src={elrayan} alt="" />
			<input className={`rounded-lg w-[55rem]`} type="text" />
			<button className={`px-5 flex justify-center items-center cursor-pointer`} ><FontAwesomeIcon color='white' className={`h-5 pr-2`} icon={faUser} />Sign in or Sign up</button>
			<br />
			<button><FontAwesomeIcon className={`h-5`} icon={faCartShopping} /></button>
		</div>
	)
}

export default Header
