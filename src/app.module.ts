import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friend } from './friend/friend.entity';
import { FriendModule } from './friend/friend.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Friend],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      migrations: ['src/migrations/*{.ts}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    }),
    FriendModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
