import { createContext } from "react";

export type SizeType = "mobile" | "tablet" | "laptop" | "pc";

export const SizeContext = createContext<SizeType>("pc");
