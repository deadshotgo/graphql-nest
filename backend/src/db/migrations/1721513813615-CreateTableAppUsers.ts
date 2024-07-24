import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAppUsers1721513813615 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE app_user (
            id              SERIAL PRIMARY KEY,
            name            VARCHAR(100) NOT NULL,
            password        VARCHAR(100) NOT NULL,
            email           VARCHAR(100) NOT NULL,
            role            VARCHAR(100) NOT NULL DEFAULT 'MANAGER',
            is_active       boolean DEFAULT true,
            is_admin        boolean DEFAULT false,
            created_at      TIMESTAMP DEFAULT current_timestamp(6),
            updated_at      TIMESTAMP DEFAULT current_timestamp(6)
          )`);
        await queryRunner.query(
            "insert into app_user(name, password, email, role, is_active, is_admin) values ('admin', 'password', 'admin@email.com', 'ADMIN', true, true)",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE app_user`);
    }

}
