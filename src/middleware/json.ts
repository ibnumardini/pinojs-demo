import { Application, json } from "express";

const useJson = (app: Application) => {
    app.use(json());
};

export default useJson;
