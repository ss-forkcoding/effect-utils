import { Console, Match } from "effect";

type ConsoleType = "LOG" | "WARN" | "ERROR" | "ASSERT";

const PROGRAM_NAME = process.env.PROGRAM_NAME || "ENV-UNDEFINED";

const getFormattedTime = (): string => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour}:${minute}:${second}`;
};

const printDebug = (content: string) => Console.log(`🚀 [DEBUG]:[${PROGRAM_NAME}] - ${content} ${getFormattedTime()}`);
const printWarn = (content: string) => Console.warn(`🚨 [WARN]:[${PROGRAM_NAME}] - ${content} ${getFormattedTime()}`);
const printError = (content: string) =>
  Console.error(`❌ [ERROR]:[${PROGRAM_NAME}] - ${content} ${getFormattedTime()}`);
const printAssert = (target: boolean) => Console.assert(target);

export const consoleProgram = (type: ConsoleType, content: string | boolean) =>
  Match.value(type).pipe(
    Match.when("LOG", () => printDebug(content as string)),
    Match.when("WARN", () => printWarn(content as string)),
    Match.when("ERROR", () => printError(content as string)),
    Match.when("ASSERT", () => printAssert(content as boolean)),
    Match.exhaustive
  );
