import useNavigation from "../hooks/use-navigation";

function Router({children, path}) {
	const {path: currentPath} = useNavigation();

	return <>{currentPath === path && children}</>;
}

export default Router;