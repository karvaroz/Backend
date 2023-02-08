import { AccountController } from "../controllers/account.controller";
import { BaseRouter } from "../router";

export class AccountRouter extends BaseRouter<AccountController> {
	constructor() {
		super(AccountController);
	}

	routes(): void {
		this.router.post("/account", (req, res) =>
			this.controller.createAccount(req, res)
		);

		this.router.get("/account", (req, res) =>
			this.controller.getAllAccounts(req, res)
		);

		this.router.get("/account/:id", (req, res) =>
			this.controller.getAccountById(req, res)
		);

		this.router.put("/account/:id", (req, res) =>
			this.controller.updateAccount(req, res)
		);

		this.router.delete("/account/:id", (req, res) =>
			this.controller.deleteAccount(req, res)
		);
	}
}
