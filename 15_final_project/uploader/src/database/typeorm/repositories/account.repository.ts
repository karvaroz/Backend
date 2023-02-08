import { AppDataSource } from "../../DBsource";
import AccountEntity from "../entities/account.entity";

export class AccountRepository {
	async createAccount(account: AccountEntity): Promise<AccountEntity> {
		const repository = AppDataSource.getMongoRepository(AccountEntity);
		return await repository.save(account);
	}

	async getAllAccounts(): Promise<AccountEntity[]> {
		const repository = AppDataSource.getMongoRepository(AccountEntity);
		return await repository.find();
	}

	async getAccountById(accountId: number): Promise<AccountEntity | undefined> {
		const repository = AppDataSource.getMongoRepository(AccountEntity);
		const result = await repository.findOne({
			where: {
				accountId: accountId,
			},
		});
		return result ? result : undefined;
	}

	async updateAccount(accountId: number, account: AccountEntity) {
		const repository = AppDataSource.getMongoRepository(AccountEntity);
		return await repository.update(accountId, account);
	}

	async deleteAccount(accountId: number) {
		const repository = AppDataSource.getMongoRepository(AccountEntity);
		return await repository.delete(accountId);
	}
}
