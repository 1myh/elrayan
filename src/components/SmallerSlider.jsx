import React from 'react'

const SmallerSlider = ({images}) => {
	return (
		<div className={`flex overflow-x-scroll w-full justify-start lg:justify-center items-center`}>
			{images.map((image) => {
				return <div className={`flex flex-col mt-3 justify-center items-center mx-3`}>
					<img key={image.name} className={`h-16 md:h-24`} src={image.image} alt="" />
					<h1>{`${image.name}`}</h1>
				</div>
			})}
		</div>
	)
}

export default SmallerSlider
