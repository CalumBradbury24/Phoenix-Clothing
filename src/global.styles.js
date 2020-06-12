import { createGlobalStyle } from 'styled-components';
//everything in app takes these styles
export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
        padding: 20px 60px;
        
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}
	a {
		text-decoration: none;
		color: black;
	}
	* {
		box-sizing: border-box;
	}
`;