import { createContext } from "react";
import { initState } from "./app-state";

export const AppContext = createContext(initState);

