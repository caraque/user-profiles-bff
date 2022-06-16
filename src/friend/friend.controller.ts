import { Body, Controller, Delete, Get, Put } from '@nestjs/common';
import { FriendService } from './friend.service';
import { AddFriend } from './dto';
import { DeleteFriend } from './dto';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Put()
  addFriend(@Body('user') friend: AddFriend) {
    return this.friendService.addFriend(friend);
  }

  @Delete()
  deleteFriend(@Body('user') friend: DeleteFriend) {
    return this.friendService.deleteFriend(friend);
  }

  @Get()
  getFriends() {
    return this.friendService.getFriends();
  }
}
