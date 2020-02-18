import { Hobby } from "./hobby.model";

export class Person {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    favouriteColor: string;
    hobbby: Hobby[];
}
