import { Person } from '../models';
import { IGetPerson } from '../dtos';
import { Pool } from 'pg';
import { injectPool } from '../ioc';

/**
 * Repository responsible for interacting with person table.
 */
@injectPool
export class PersonRepository {
    private pool!: Pool;

    /**
     * Retrieves a person from the database
     *
     * @param {string} name     Name of the person to find.
     * @param {Gender} gender   Gender of the person to find.
     * @param {string} email    E-mail of the person to find.
     *
     * @returns {Person} person matching search
     */
    public async get(param: IGetPerson): Promise<Person> {
        const result = await this.pool.query(
            `
            SELECT 
                "tp"."id", 
                "tp"."name", 
                "tp"."birth_date", 
                "tp"."gender", 
                "tp"."email", 
                "tp"."country_id", 
                "tp"."modified_at", 
                "tp"."created_at" 
            FROM 
                "public"."t_person" "tp"
            WHERE 
                "tp"."email" = $1`,
            [param.email],
        );

        const person = new Person(
            result.rows[0].id,
            result.rows[0].name,
            result.rows[0].gender,
            result.rows[0].email,
            result.rows[0].birth_date,
            result.rows[0].country_id,
            result.rows[0].modified_at,
            result.rows[0].created_at,
        );

        return Promise.resolve(person);
    }

    /**
     * Creates a new person at the database.
     *
     * @param {Person} person the person to insert.
     *
     * @returns {Person} the created person with id.
     */
    public async create(person: Person): Promise<Person> {
        const result = await this.pool.query('CALL create_person($1, $2, $3, $4, $5, $6)', [
            person.name,
            person.gender,
            person.email,
            person.countryId,
            person.birthDate,
            person.id,
        ]);

        person.id = result.rows[0].id;
        return Promise.resolve(person);
    }
}
