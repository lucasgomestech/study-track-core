import { Gender } from '../enums';

/**
 * Data model of a person.
 *
 * @property {number}       id              Person unique identifier.
 * @property {string}       name            Person name.
 * @property {Gender}       gender          Person gender.
 * @property {string}       email           Person e-mail address.
 * @property {Date}         birthDate       Person date of birth.
 * @property {number}       countryId       Country unique identifier.
 * @property {Date}         modifiedAt      Date in which the person data was modified.
 * @property {Date}         createdAt       Date in which the person data was created.
 */
export class Person {
    constructor(
        public id?: number,
        public name?: string,
        public gender?: Gender,
        public email?: string,
        public birthDate?: Date,
        public countryId?: number,
        public modifiedAt?: Date,
        public createdAt?: Date
    ) {}
}
