import { startREPL } from "./repl.js";
import { initState } from "./state.js";
function main() {
    const programState = initState();
    startREPL(programState);
}
main();
