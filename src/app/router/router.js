import React from "react"

import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Appointments from "../pages/appointments"
import ReduxTutorial from "../pages/reduxtuti"
import Header from "../components/header"


const Router = () => {
	return (
		<div>
			<Header/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="appointments" element={<Appointments />} />
				<Route path="redux" element={<ReduxTutorial/>} />
			</Routes>
		</div>

	)
}


export default Router