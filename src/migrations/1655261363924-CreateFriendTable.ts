import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFriendTable1655261363924 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'friend',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'string',
            length: '50',
          },
          {
            name: 'lastname',
            type: 'string',
            length: '50',
          },
          {
            name: 'cell',
            type: 'string',
            length: '15',
          },
          {
            name: 'email',
            type: 'string',
            length: '100',
          },
          {
            name: 'imageUrl',
            type: 'string',
          },
        ],
      }),
      true,
    );
  }

  public async down(): Promise<void> {
    return Promise.resolve();
  }
}
