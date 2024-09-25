import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import usa from "../images/usa.png"
import React from 'react'

const Sections = () => {
	let sections = ["All", "ELECTRONICS", "HOME & KITCHEN", "BEAUTY & FRAGRANCE", "GIFT CARDS", "SPCIAL OFFERS"]

	return (
		<div className={`lg:flex hidden justify-around align-baseline py-5`} >
			<div className={`flex justify-center items-center`} >
				{sections.map((section) => {
					return <button className={`px-3 py-2 rounded-md  mx-2 hover:bg-indigo-500 hover:text-white`} >{section}</button>
				})}
			</div>

			<div className={`flex justify-between items-center`} >
				<h1 className={`px-3 flex justify-center items-center`} >
					<FontAwesomeIcon className={`px-2 text-indigo-500`} icon={faPhone} />
					80010808
				</h1>
				<button className={`flex justify-center items-center`} >English <img className={`h-6 px-1`} src={usa} alt="" /> </button>
			</div>
		</div>
	)
}

export default Sections
