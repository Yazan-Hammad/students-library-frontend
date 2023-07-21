import { useContext } from "react";
import BackendContext from "../contexts/backend";

function useBackend() {
  return useContext(BackendContext);
}

export default useBackend;
