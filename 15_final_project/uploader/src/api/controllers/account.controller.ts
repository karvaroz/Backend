import { Request, Response } from "express";
import { ObjectID } from "typeorm";
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
			const response = new ResponseMsg(500, "Could not get accounts", error);
			res.status(response.responseCode).json(response);
		}
	}

	async getAccountById(req: Request, res: Response) {
		try {
			const account = await accountService.getAccountById(parseInt(req.params.id));
			const response = new ResponseMsg(
				200,
				"Got account by id successfully",
				account
			);
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not get account", error);
			res.status(response.responseCode).json(response);
		}
	}

	async updateAccount(req: Request, res: Response) {
		try {
			const account = await accountService.updateAccount(
				parseInt(req.params.id),
				req.body
			);
			const response = new ResponseMsg(
				200,
				"Account updated successfully",
				account
			);
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not update account", error);
			res.status(response.responseCode).json(response);
		}
	}

	async deleteAccount(req: Request, res: Response) {
		try {
			await accountService.deleteAccount(parseInt(req.params.id));
			const response = new ResponseMsg(200, "Account deleted successfully");
			res.status(response.responseCode).json(response);
		} catch (error) {
			const response = new ResponseMsg(500, "Could not delete account", error);
			res.status(response.responseCode).json(response);
		}
	}
}
