import React from 'react'
import { m } from 'framer-motion'

export interface ButtonInterface {
	children: JSX.Element | JSX.Element[] | string
}

const Button: React.FC<ButtonInterface> = ({ children }) => {
	return (
		<m.a
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.8 }}
			transition= {{ duration: 0.1 }}
			className='px-3 py-2 bg-primary text-center text-white rounded-lg transition hover:bg-primary/80'
		>
			{children}
		</m.a>
	)
}

export default Button

