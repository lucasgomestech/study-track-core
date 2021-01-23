import { PersonService } from '../../services';
import { Person } from '../../models';
import { Gender } from '../../enums';
import { POOL as pool } from '../../ioc';

describe(PersonService.name, () => {
    const personService = new PersonService();

    const defaultBirthDate = new Date(1984, 6, 13);

    afterAll(async () => {
        pool.end();
    });

    it('should initialize PersonService without errors', async () => {
        expect(new PersonService()).toBeInstanceOf(PersonService);
    });

    it('should create person when all properties are informed', async () => {
        const person: Person = {
            id: 0,
            name: 'Luana Mariah Pires',
            gender: Gender.FEMALE,
            email: 'luana@email.com',
            countryId: 4,
            birthDate: defaultBirthDate,
        };

        const createdPerson = await personService.create(person);

        expect(createdPerson).toHaveProperty('id');
        expect(createdPerson.id).toBeGreaterThan(0);
        expect(createdPerson).toHaveProperty('name', person.name);
        expect(createdPerson).toHaveProperty('gender', person.gender);
        expect(createdPerson).toHaveProperty('email', person.email);
        expect(createdPerson).toHaveProperty('birthDate', person.birthDate);
        expect(createdPerson).toHaveProperty('countryId', person.countryId);
    });

    it('should return Person with name when get is called', async () => {
        const person = await personService.get({
            email: 'luana@email.com',
        });

        expect(person).toBeInstanceOf(Person);
        expect(person).toHaveProperty('id');
        expect(person.id).toBeGreaterThan(0);
        expect(person).toHaveProperty('name', 'Luana Mariah Pires');
        expect(person).toHaveProperty('gender', Gender.FEMALE);
        expect(person).toHaveProperty('email', 'luana@email.com');
        expect(person).toHaveProperty('birthDate', defaultBirthDate);
        expect(person).toHaveProperty('countryId', 4);
        expect(person.modifiedAt).toBeInstanceOf(Date);
        expect(person).toHaveProperty('createdAt');
        expect(person.createdAt).toBeInstanceOf(Date);
    });
});
