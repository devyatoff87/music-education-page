import { createContext } from "react";
import { initState } from "./ui-state";

export const UIContext = createContext(initState);

