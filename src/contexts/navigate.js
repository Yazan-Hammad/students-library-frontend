import { createContext, useEffect, useState } from "react";

const NavigateContext = createContext();

function NavigateProvider({children}) {
	const [path, setPath] = useState(window.location.pathname);

	useEffect(() => {
		const handle = () => {
			setPath(window.location.pathname);
		}

		window.addEventListener('popstate', handle);

		return () => {
			window.removeEventListener('popstate', handle);
		}
	}, []);

	const navigate = function(to) {
		window.history.pushState({}, '', to)
		setPath(to);
	};

	return <NavigateContext.Provider value={{path, navigate}}>
		{children}
	</NavigateContext.Provider>
}

export {NavigateProvider};
export default NavigateContext;