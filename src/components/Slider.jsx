import React, { useEffect, useState } from 'react'

const Slider = ({images}) => {
	let [index, setIndex] = useState(0)
	let handleSlide = () => {
		let newIndex = !index ? index + 1 : index - 1
		setIndex(newIndex)
	}
	useEffect(() => {
		let interval = setInterval(handleSlide, 5000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			<img className={`w-full relative`} src={images[index]} alt={`Slide ${index + 1}`} />
		</div>
	)
}

export default Slider
