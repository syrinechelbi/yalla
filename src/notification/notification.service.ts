// notification.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from '../entities/notification.entity';
import { AddNotificationDto } from '../dto/notif/Add-notification.dto';
@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private notificationRepository: Repository<Notification>,
    ) {}

    async sendNotification(notificationDto: AddNotificationDto): Promise<Notification> {
        const { libelle, contenu } = notificationDto;

        const notification = this.notificationRepository.create({
            libelle,
            contenu,
        });

        return await this.notificationRepository.save(notification);
    }

    async getAllNotifications(): Promise<Notification[]> {
        return await this.notificationRepository.find();
    }

}
