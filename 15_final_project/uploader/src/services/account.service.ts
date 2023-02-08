import AccountEntity from "../database/typeorm/entities/account.entity";
import { AccountRepository } from "../database/typeorm/repositories/account.repository";
import { RabbitMQService } from "./rabbitmq.service";

const queueName = "Starts Service";

export class AccountService {
	private accountRepository: AccountRepository;

	constructor() {
		this.accountRepository = new AccountRepository();
	}
	async createAccount(account: AccountEntity) {
		const accountCreated = await this.accountRepository.createAccount(account);
		if (accountCreated) {
			new RabbitMQService().sendMsgToQueue(
				queueName,
				"Signal sent from Updloader - An account has been created"
			);
			return accountCreated;
		}
	}

	async getAllAccounts() {
		const accounts = await this.accountRepository.getAllAccounts();
		if (accounts) {
			new RabbitMQService().sendMsgToQueue(
				queueName,
				"Signal sent from Updloader - Requesting all accounts"
			);
			return accounts;
		}
	}

	async getAccountById(id: string) {
		const account = await this.accountRepository.getAccountById(id);
		if (account) {
			new RabbitMQService().sendMsgToQueue(
				queueName,
				"Signal sent from Updloader - Got account by id"
			);
			return account;
		}
	}

	async updateAccount(id: string, account: AccountEntity) {
		const accountToUpdate = await this.accountRepository.getAccountById(id);
		if (accountToUpdate) {
			const accountInfo: AccountEntity = {
				_id: accountToUpdate._id,
				clientId: account.clientId,
				clientSecret: account.clientSecret,
				redirectUri: account.redirectUri,
				refreshToken: account.refreshToken,
			};
			new RabbitMQService().sendMsgToQueue(
				queueName,
				"Signal sent from Updloader - An account has been updated"
			);
			return await this.accountRepository.updateAccount(accountInfo);
		}
	}

	async deleteAccount(id: string) {
		const account = await this.accountRepository.deleteAccount(id);
		if (account) {
			new RabbitMQService().sendMsgToQueue(
				queueName,
				"Signal sent from Updloader - Am account has been deleted"
			);
		}
		return account;
	}
}
