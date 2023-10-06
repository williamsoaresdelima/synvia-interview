import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, p, span {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    --shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    --color-white: #FFF;
    --color-purple-dark: #6610F2;
    --color-purple-medium: #6F42C1;
    --color-purple-light: #6610F280;
    --color-gray-medium: #494949;
    --color-gray-light: #838383; 
    --color-gray-very-light: #00000057;
    --color-green-medium: #86BD2C;
    --page-bg: #E2E8F0;
  }

  .subtitle {
    color: var(--color-gray-medium);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: -0.16px;
  } 

	.info {
		color: var(--color-gray-light);
		font-size: 7px;
		font-weight: 700;
		letter-spacing: -0.14px;
		text-transform: uppercase;
	}

  .emphasis-source {
    color: var(--color-purple-dark);
    font-size: 8px;
    font-weight: 400;
    letter-spacing: -0.16px;
  }

  .white-font {
    color: var(--color-white);
    font-size: 8px;
    font-weight: 400;
    letter-spacing: 1px;
		text-transform: capitalize;
  }

  input {
    ::placeholder {
        color: var(--color-gray-very-light);
        font-size: 8px;
        font-weight: 400;
        letter-spacing: -0.16px;
    }
  }

  *:focus {
    outline: none;
	}

`;

export default GlobalStyle;
