import { useContext } from "react";
import NavigateContext from "../contexts/navigate";

function useNavigation() {
	return useContext(NavigateContext);
}

export default useNavigation;