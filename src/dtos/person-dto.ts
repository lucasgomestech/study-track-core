import { Gender } from '../enums';

/**
 * Parameters to get a person.
 * @property {string} name
 * @property {Gender} gender
 * @property {string} email
 */
export interface IGetPerson {
    name?: string;
    gender?: Gender;
    email?: string;
}
