import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Friend, Friend as FriendEntity } from './friend.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { AddFriend, DeleteFriend } from './dto';
import { validate } from 'class-validator';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(FriendEntity)
    private readonly friendRepository: Repository<FriendEntity>,
  ) {}

  async addFriend(addFriend: AddFriend): Promise<any> {
    const { name, lastname, cell, imageUrl, email } = addFriend;
    const newFriend = new FriendEntity();
    newFriend.name = name;
    newFriend.lastname = lastname;
    newFriend.cell = cell;
    newFriend.imageUrl = imageUrl;
    newFriend.email = email;
    const error = await validate(newFriend, { groups: ['add'] });

    if (error.length) {
      throw new HttpException(
        { message: 'Error to add friend.', error },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return this.friendRepository.save(newFriend);
    }
  }

  async deleteFriend(deleteFriend: DeleteFriend): Promise<DeleteResult> {
    const { id, email } = deleteFriend;
    const friend = new Friend();
    friend.id = id;
    friend.email = email;
    const error = await validate(friend, { groups: ['delete'] });

    if (error.length) {
      throw new HttpException(
        { message: 'Error to delete friend.', error },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return this.friendRepository.delete(friend);
    }
  }

  async getFriends(): Promise<Friend[]> {
    return this.friendRepository.find();
  }
}
