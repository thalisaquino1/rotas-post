import { app } from "./lib/express";
import userRouter from "./modules/users/user.route";
import demandRouter from "./modules/demands/demand.route";
import { refreshRouter } from "./modules/refresh/refresh.route";

app.use(userRouter, demandRouter, refreshRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API LIGADA NA PORTA ${port}`);
});
