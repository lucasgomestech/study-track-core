import { Gender } from '../enums';

/**
 * Parameters to get a person.
 *
 * @property {string} name      The person's name.
 * @property {Gender} gender    The person's gender.
 * @property {string} email     The person's e-mail.
 */
export interface IGetPerson {
    name?: string;
    gender?: Gender;
    email?: string;
}
