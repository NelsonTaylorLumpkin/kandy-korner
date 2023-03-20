import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/locationsList"
import { ProductList } from "../Products/productsList"



export const ApplicationViews = () => {
	return <Routes>
		<Route 
		path="/"
		elements={
			<>
				<Outlet />
			</>
		}>
			<Route className="navLinks" path="locations" element={<LocationList />} />
		</Route>
		<Route
		path="/"
		elements={
			<>
				<Outlet />
			</>
		}>
			<Route className="navLinks" path="products" element={<ProductList />} />
		</Route>
	</Routes>
}

