import "es6-shim";
import "reflect-metadata";
import {FormatstringPipe} from "./formatstring-pipe";

describe("FormatstringPipe", () => {
  
    let pipe: FormatstringPipe;

    beforeAll(() => {
        pipe = new FormatstringPipe();
    });

    it("should be ok", () => {
        var result = pipe.transform("{0}", ["X"]);
        expect(result).toEqual("X");
    });
  
});