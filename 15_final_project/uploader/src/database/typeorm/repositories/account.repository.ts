import { AppDataSource } from "../../DBsource";
import AccountEntity from "../entities/account.entity";

const repository = AppDataSource.getMongoRepository(AccountEntity);

export class AccountRepository {
	async createAccount(account: AccountEntity): Promise<AccountEntity> {
		return await repository.save(account);
	}

	async getAllAccounts(): Promise<AccountEntity[]> {
		return await repository.find();
	}

	async getAccountById(id: string) {
		const result = await repository.findOneBy(id);
		return result
	}

	async updateAccount(account: AccountEntity) {
		return await repository.save(account);
	}

	async deleteAccount(id: string) {
		return await repository.delete(id);
	}
}
