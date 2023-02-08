import { Request, Response } from "express";
import { AccountService } from "../../services/account.service";
import { ResponseMsg } from "../../utils/response";

const accountService = new AccountService();

export class AccountController {
	async createAccount(req: Request, res: Response) {
		try {
			const account = await accountService.createAccount(req.body);
			const response = new ResponseMsg(
				200,
				"account created successfully",
				account
			);
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not create the account");
			res.status(response.responseCode).json(response);
		}
	}

	async getAllAccounts(req: Request, res: Response) {
		try {
			const accounts = await accountService.getAllAccounts();
			const response = new ResponseMsg(
				200,
				"Got accounts successfully",
				accounts
			);
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not get accounts");
			res.status(response.responseCode).json(response);
		}
	}

	async getAccountById(req: Request, res: Response) {
		const account = await accountService.getAccountById(req.params.id);
		if (account) {
			const response = new ResponseMsg(
				200,
				"Got account by id successfully",
				account
			);
			return res.status(response.responseCode).json(response);
		}
		const response = new ResponseMsg(500, "Could not get account");
		return res.status(response.responseCode).json(response);
	}

	async updateAccount(req: Request, res: Response) {
		const account = await accountService.getAccountById(req.params.id);
		if (account) {
			const accountToUpdate = await accountService.updateAccount(
				account._id,
				req.body
			);
			const response = new ResponseMsg(
				200,
				"Account updated successfully",
				accountToUpdate
			);
			return res.status(response.responseCode).json(response);
		}
		const response = new ResponseMsg(500, "Could not update account");
		return res.status(response.responseCode).json(response);
	}

	async deleteAccount(req: Request, res: Response) {
		try {
			await accountService.deleteAccount(req.params.id);
			const response = new ResponseMsg(200, "Account deleted successfully");
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not delete account");
			res.status(response.responseCode).json(response);
		}
	}
}
