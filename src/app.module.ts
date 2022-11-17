import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-jhonatan.alwaysdata.net',
      port: 3306,
      username: 'jhonatan',
      password: '71387934',
      database: 'jhonatan_prueba123',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
