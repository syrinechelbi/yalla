
import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { AddNotificationDto } from '../dto/notif/Add-notification.dto';
import { Notification } from '../entities/notification.entity';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @Post('/send')
    async sendNotification(@Body() notificationDto: AddNotificationDto): Promise<Notification> {
        return await this.notificationService.sendNotification(notificationDto);
    }

    @Get('/getAll')
    async getAllNotifications(): Promise<Notification[]> {
        return await this.notificationService.getAllNotifications();
    }
}
