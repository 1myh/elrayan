import React from 'react'

const SmallerSlider = ({images}) => {
	return (
		<div className={`flex justify-center items-center`}>
			{images.map((image) => {
				return <div className={`flex flex-col justify-center items-center px-3`}>
					<img key={image.name} className={`h-32`} src={image.image} alt="" />
					<h1>{`${image.name}`}</h1>
				</div>
			})}
		</div>
	)
}

export default SmallerSlider
