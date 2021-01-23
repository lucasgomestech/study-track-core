import { Person } from '../../models/person';
import { Gender } from '../../enums/gender';

describe(Person.name, () => {
    it('should initialize a person without errors', async () => {
        const id = 1;
        const name = 'Márcio Raul Duarte';
        const gender = Gender.MALE;
        const email = 'marcio@email.com';
        const birthDate = new Date(1984, 10, 19);
        const countryId = 4;
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const person = new Person(
            id,
            name,
            gender,
            email,
            birthDate,
            countryId,
            today,
            yesterday,
        );

        expect(person).toBeInstanceOf(Person);
        expect(person).toHaveProperty('id', id);
        expect(person).toHaveProperty('name', name);
        expect(person).toHaveProperty('gender', gender);
        expect(person).toHaveProperty('email', email);
        expect(person).toHaveProperty('birthDate', birthDate);
        expect(person).toHaveProperty('countryId', countryId);
        expect(person).toHaveProperty('modifiedAt', today);
        expect(person).toHaveProperty('createdAt', yesterday);
    });
});
