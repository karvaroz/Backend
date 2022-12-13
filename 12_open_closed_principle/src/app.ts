import NotificationByWhats from "./notificationByWhats";
import User from "./user";

const user = new User("test")

let notByWp = new NotificationByWhats()
notByWp.notify(user, "test")