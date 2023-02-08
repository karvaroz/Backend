import AccountEntity from "../database/typeorm/entities/account.entity";
import { AccountRepository } from "../database/typeorm/repositories/account.repository";

export class AccountService {
	private accountRepository: AccountRepository;

	constructor() {
		this.accountRepository = new AccountRepository();
	}
	async createAccount(account: AccountEntity): Promise<AccountEntity> {
		return await this.accountRepository.createAccount(account);
	}

	async getAllAccounts(): Promise<AccountEntity[]> {
		return await this.accountRepository.getAllAccounts();
	}

	async getAccountById(id: number): Promise<AccountEntity | unknown> {
		return await this.accountRepository.getAccountById(id);
	}

	async updateAccount(accountId: number, account: AccountEntity) {
		const accountToUpdate = await this.accountRepository.getAccountById(
			accountId
		);
		if (accountToUpdate) {
			const accountInfo: AccountEntity = {
				_id: accountToUpdate._id,
				accountId: accountToUpdate.accountId,
				email: account.email,
				clientId: account?.clientId,
				clientSecret: account?.clientSecret,
				redirectUri: account?.redirectUri,
				googleDriveKey: account?.redirectUri,
			};
			return await this.accountRepository.updateAccount(accountId, accountInfo);
		}
	}

	async deleteAccount(accountId: number) {
		return await this.accountRepository.deleteAccount(accountId);
	}
}
