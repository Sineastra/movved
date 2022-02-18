import { Routes, Route } from "react-router-dom"
import Landing from "../../Pages/Landing/Landing"
import MainLayout from "../../Layouts/MainLayout"
import MovieDetails from "../../Pages/MovieDetails/MovieDetails"
import Movies from "../../Pages/Movies/Movies"


const AppRouter = () => {

	return (
		<Routes>
			<Route path="/" element={ <MainLayout/> }>
				<Route path="/" element={ <Landing/> }/>
				<Route path="/movies" element={ <Movies/> }/>
				<Route path="/movies/:id" element={ <MovieDetails/> }/>
			</Route>
		</Routes>
	)
}

export default AppRouter