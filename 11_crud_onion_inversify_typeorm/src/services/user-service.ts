export default class UserService {
  // injectable - inversify
  private userRepository: IUserRepository<User>

  createUser (user: User): User {
    return new User(user)
  }
}
