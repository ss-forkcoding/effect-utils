type ConsoleType = "LOG" | "WARN" | "ERROR";
export declare const consoleProgram: (type: ConsoleType, content: string) => import("effect/Effect").Effect<void, never, never>;
export {};
