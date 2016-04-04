import {Pipe, PipeTransform} from "angular2/core";
import * as formatstring from "formatstring";

@Pipe({name: "formatstring"})
export class FormatstringPipe implements PipeTransform {
    transform(value: string, args?: any[]): string {
        return formatstring(value, ...args);
    }
}