import React from 'react'

const SmallerSlider = ({images}) => {
	return (
		<div className={`flex overflow-scroll justify-center items-center`}>
			{images.map((image) => {
				return <div className={`flex flex-col mt-3 justify-center items-center px-3`}>
					<img key={image.name} className={`h-14 md:h-24`} src={image.image} alt="" />
					<h1>{`${image.name}`}</h1>
				</div>
			})}
		</div>
	)
}

export default SmallerSlider
