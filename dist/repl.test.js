import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    {
        input: " Foo Bar ",
        expected: ["foo", "bar"],
    },
    {
        input: " spaced out ",
        expected: ["spaced", "out"],
    },
])(`cleanInput($input)`, ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (let i = 0; i < expected.length; i++) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
