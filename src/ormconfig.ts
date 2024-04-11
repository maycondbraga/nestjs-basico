import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nestjs_db',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
