import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../_state/app/store"
import { BrowserRouter } from "react-router-dom"
import MiscBtnsPlayMovieGroup from "./MiscBtnsPlayMovieGroup"
import user from "@testing-library/user-event"
import bigPoster from "../../assets/exampleMoviePoster.jpg"


const mockedMovie = {
	_id: '1',
	title: 'a',
	smallPoster: '',
	bigPoster: 'a',
	isSubbed: true,
	isDubbed: true,
	year: 1,
	watchLink: 'a',
	engTitle: 'a',
	genres: ['a'],
	trailerLink: 'a',
	comments: [{
		_id: 'a',
		user: {
			name: 'a',
			email: 'a',
			password: 'a',
			profilePic: 'a',
		}, comment: 'comment',
	}],
	actors: ['a', 'b'],
	director: 'a',
}

describe("---> testing MiscBtnsPlayMovieGroup modal openings on logged OUT user", () => {
	const renderScreen = () => {
		render(
			<Provider store={ store }>
				<BrowserRouter>
					<MiscBtnsPlayMovieGroup movie={ mockedMovie }/>
				</BrowserRouter>
			</Provider>,
		)
	}

	it("should open correct modal on pressing watch trailer btn", async () => {
		renderScreen()

		const btn = screen.getByTitle(/watch trailer/i)
		let modal = screen.queryAllByRole('dialog')
		expect(modal[0]).toHaveClass('hiddenBackdrop')

		await user.click(btn)

		modal = screen.getAllByRole('dialog')
		const modalText = screen.getByText('Trailer')

		expect(modal[0]).not.toHaveClass('hiddenBackdrop')
		expect(modalText).toBeInTheDocument()
	})
})

export {}