import { PersonRepository } from '../../repositories';
import { Person } from '../../models';
import { Gender, NationalIdType } from '../../enums';
import { POOL as pool } from '../../ioc';

describe(PersonRepository.name, () => {
    const personRepository = new PersonRepository();

    const defaultBirthDate = new Date(1984, 6, 13);

    afterAll(async () => {
        pool.end();
    });

    it('should initialize PersonRepository without errors', async () => {
        expect(new PersonRepository()).toBeInstanceOf(PersonRepository);
    });

    it('should create person when all properties are informed', async () => {
        const person: Person = {
            id: 0,
            name: 'Elias Breno Leandro Santos',
            gender: Gender.MALE,
            email: 'elias@email.com',
            nationalIdType: NationalIdType.CPF,
            nationalId: '81729708382',
            countryId: 4,
            birthDate: defaultBirthDate,
        };

        const createdPerson = await personRepository.create(person);

        expect(createdPerson).toHaveProperty('id');
        expect(createdPerson.id).toBeGreaterThan(0);
        expect(createdPerson).toHaveProperty('name', person.name);
        expect(createdPerson).toHaveProperty('gender', person.gender);
        expect(createdPerson).toHaveProperty('email', person.email);
        expect(createdPerson).toHaveProperty('nationalIdType', person.nationalIdType);
        expect(createdPerson).toHaveProperty('nationalId', person.nationalId);
        expect(createdPerson).toHaveProperty('birthDate', person.birthDate);
        expect(createdPerson).toHaveProperty('countryId', person.countryId);
    });

    it('should return Person with name when get is called', async () => {
        const person = await personRepository.get({
            email: 'elias@email.com',
        });

        expect(person).toBeInstanceOf(Person);
        expect(person).toHaveProperty('id');
        expect(person.id).toBeGreaterThan(0);
        expect(person).toHaveProperty('name', 'Elias Breno Leandro Santos');
        expect(person).toHaveProperty('gender', Gender.MALE);
        expect(person).toHaveProperty('email', 'elias@email.com');
        expect(person).toHaveProperty('nationalIdType', NationalIdType.CPF);
        expect(person).toHaveProperty('nationalId', '81729708382');
        expect(person).toHaveProperty('birthDate', defaultBirthDate);
        expect(person).toHaveProperty('countryId', 4);
        expect(person.modifiedAt).toBeInstanceOf(Date);
        expect(person).toHaveProperty('createdAt');
        expect(person.createdAt).toBeInstanceOf(Date);
    });
});
