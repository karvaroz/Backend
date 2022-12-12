import UserEntity from '../infrastructure/user.entity'

export interface UserRepository {
 readAll(): Promise<UserEntity[]>;
 readById(id: number): Promise<UserEntity | null>;
 createUser(user: UserEntity): Promise<UserEntity | null>;
 updateUser(user: UserEntity): Promise<UserEntity | null>;
 deleteUser(id: number): void;
}
