export function cleanInput(inputString: string): string[] {
    const newArray = inputString.trim().toLowerCase().split(" ");
    for (let i=0; i<newArray.length; i++) {
        newArray[i] = newArray[i];
    }
    return newArray;
}