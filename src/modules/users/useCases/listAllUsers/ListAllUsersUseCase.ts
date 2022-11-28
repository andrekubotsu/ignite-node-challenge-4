import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user.admin) {
      throw new Error("User is not an admin!");
    }

    const list = this.usersRepository.list();

    return list;
  }
}

export { ListAllUsersUseCase };
