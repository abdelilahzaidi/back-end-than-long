import { BdModule } from './BD/bd.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [BdModule,AuthModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
