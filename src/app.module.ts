import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalisationController } from './localisation/localisation.controller';
import { LocalisationService } from './localisation/localisation.service';
import { NotificationService } from './notification/notification.service';
import { NotificationController } from './notification/notification.controller';
import { CompteService } from './compte/compte.service';
import { CompteController } from './compte/compte.controller';

@Module({
  imports: [],
  controllers: [AppController, LocalisationController, NotificationController, CompteController],
  providers: [AppService, LocalisationService, NotificationService, CompteService],
})
export class AppModule {}
