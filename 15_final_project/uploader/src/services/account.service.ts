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

	async getAccountById(id: string) {
		const account = await this.accountRepository.getAccountById(id);
		if (account) {
			return account;
		}
	}

	async updateAccount(id: string, account: AccountEntity) {
		const accountToUpdate = await this.accountRepository.getAccountById(id);
		if (accountToUpdate) {
			const accountInfo: AccountEntity = {
				_id: accountToUpdate._id,
				accountId: accountToUpdate.accountId,
				email: account.email,
				clientId: account.clientId,
				clientSecret: account.clientSecret,
				redirectUri: account.redirectUri,
				googleDriveKey: account.redirectUri,
			};
			return await this.accountRepository.updateAccount(accountInfo);
		}
	}

	async deleteAccount(id: string) {
		return await this.accountRepository.deleteAccount(id);
	}
}
