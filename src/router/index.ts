import { Application } from "express";
import useFallback from "./fallback";
import productRouter from "./product";
import homeRouter from "./home";

const useRouter = (app: Application) => {
    app.use("/", homeRouter);
    app.use("/product", productRouter);

    useFallback(app);
};

export default useRouter;
