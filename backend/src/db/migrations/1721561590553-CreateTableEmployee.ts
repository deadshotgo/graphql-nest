import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableEmployee1721561590553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE employee (
            id              SERIAL PRIMARY KEY,
            name            VARCHAR(100) NOT NULL,
            password        VARCHAR(100) NOT NULL,
            email           VARCHAR(100) NOT NULL,
            experience      VARCHAR(100) NOT NULL,
            vertical        VARCHAR(100) NOT NULL,
            description     TEXT DEFAULT NULL,
            file_link       VARCHAR(300) DEFAULT NULL,
            salary          VARCHAR(255) DEFAULT NULL,
            is_active       boolean DEFAULT true,
            created_at      TIMESTAMP DEFAULT current_timestamp(6),
            updated_at      TIMESTAMP DEFAULT current_timestamp(6)
          )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE employee`);
    }

}
