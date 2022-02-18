import { movieCommentIntF, movieInterface, signedUserInfoInterface } from "../_misc/interfaces"


interface movieRequestsIntF {
	sendReport: (m: string, type: string) => void,
	addComment: (id: string, c: string) => Promise<movieCommentIntF[]>,
	getSearchMovies: (s: string) => Promise<movieInterface[]>
}
const movieRequests: movieRequestsIntF = {
	sendReport: async (message, type) => { return null},
	addComment: async (movieId, comment) => {
		return [{
			_id: 'b',
			user: {
				_id: '3',
				name: 'asd',
				email: '',
				password: '',
				profilePic: null,
			},
			comment: '',
		}]
	},
	getSearchMovies: async (search) => ([{
		_id: '0',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: true,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
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
	}, {
		_id: '0',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: true,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
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
	}, {
		_id: '0',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: true,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
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
	}, {
		_id: '0',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: true,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
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
	}, {
		_id: '0',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: true,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
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
	}]),
}

export default movieRequests