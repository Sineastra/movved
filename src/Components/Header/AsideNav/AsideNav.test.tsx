import AsideNav from "./AsideNav"
import { runAuthLinksTests, runAuthMenuToggleTest, runNavLinksTests } from "../_misc/abstractTests"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"


const loggedInUser: signedUserInfoInterface = {
	_id: '1',
	name: 'a',
	email: 'a@a.a',
	password: 'a',
	profilePic: null,
}

const renderScreen = (loggedUser: signedUserInfoInterface | null) =>
	render(
		<BrowserRouter>
			<AsideNav loggedUser={ loggedUser } visible={ true }/>
		</BrowserRouter>,
	)

describe("---> MOBILE ---> Testing the navigation NavLinks", () => {
	runNavLinksTests(
		{
			navLinksTexts: ['movies', 'series', 'actors'],
			navLinksHrefs: ['/movies', '/series', '/actors'],
			renderScreen,
			loggedInUser: null,
		},
	)
})

describe("---> MOBILE ---> Testing the auth links section (login, user profile interaction, etc...", () => {
	runAuthLinksTests({ renderScreen, loggedInUser })
})

describe("---> MOBILE ---> Testing the toggle of the auth submenu", () => {
	runAuthMenuToggleTest({ renderScreen, loggedInUser })
})