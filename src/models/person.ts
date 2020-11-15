import { Gender, NationalIdType } from '../enums';

/**
 * Data model of a person.
 */
export class Person {
    constructor(
        public id?: number,
        public name?: string,
        public gender?: Gender,
        public email?: string,
        public nationalIdType?: NationalIdType,
        public nationalId?: string,
        public birthDate?: Date,
        public countryId?: number,
        public modifiedAt?: Date,
        public createdAt?: Date,
    ) {}
}
