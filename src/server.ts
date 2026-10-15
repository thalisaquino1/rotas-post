import { app } from "./lib/express";
import userRouter from "./modules/users/user.route";
import demandRouter from "./modules/demands/demand.route";
import { refreshRouter } from "./modules/refresh/refresh.route";

app.use(userRouter, demandRouter, refreshRouter);

app.listen(3000, () => {
  console.log("API LIGADA NA PORTA 3000");
});
