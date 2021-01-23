import { PersonRepository } from '../repositories';
import { Person } from '../models';
import { IGetPerson } from '../dtos';

/**
 * Service responsible for interacting with person repository.
 */
export class PersonService {
    private personRepository: PersonRepository = new PersonRepository();

    /**
     * Calls the repository to search for a person.
     *
     * @param {string}  name    Person name.
     * @param {Gender}  gender  Person gender.
     * @param {string}  email   Person e-mail.
     *
     * @returns {Person} person matching search.
     */
    public async get(param: IGetPerson): Promise<Person> {
        const person = await this.personRepository.get(param);
        return Promise.resolve(person);
    }

    /**
     * Calls the repository to create a new person.
     *
     * @param {Person} person the person to create.
     *
     * @returns {Person} the created person with id.
     */
    public async create(person: Person): Promise<Person> {
        const createdPerson = await this.personRepository.create(person);
        return Promise.resolve(createdPerson);
    }
}
