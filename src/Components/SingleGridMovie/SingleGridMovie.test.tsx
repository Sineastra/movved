import { movieInterface } from "../../_misc/interfaces"
import { BrowserRouter } from "react-router-dom"
import SingleGridMovie from "./SingleGridMovie"
import renderer from "react-test-renderer"


const mockedMovie: movieInterface = {
	_id: '0',
	title: 'a',
	smallPoster: 'b',
	bigPoster: 'c',
	isSubbed: true,
	isDubbed: true,
	year: 0,
	watchLink: 'd',
	engTitle: 'e',
	genres: ['f'],
	trailerLink: 'a',
	comments: [{
		_id: 'a',
		user: {
			_id: '1',
			name: 'a',
			email: 'a',
			password: 'a',
			profilePic: 'a',
		}, comment: 'comment',
	}],
	actors: ['a', 'b'],
	director: 'a',
}

const renderScreen = (movie: movieInterface) =>
	renderer.create(
		<BrowserRouter>
			<SingleGridMovie movie={ movie }/>
		</BrowserRouter>,
	).toJSON()

describe('---> Testing Single Slide of Grid Category Carousel', () => {
	it("renders correctly when isSubbed and/or isDubbed are present (snapshot testing)", () => {
		const tree = renderScreen(mockedMovie)

		expect(tree).toMatchSnapshot()
	})
	it("renders correctly when isSubbed and/or isDubbed are NOT present (snapshot testing)", () => {
		const modifMockedMovie = { ...mockedMovie, ...{ isSubbed: false, isDubbed: false } }
		const tree = renderScreen(modifMockedMovie)

		expect(tree).toMatchSnapshot()
	})
})