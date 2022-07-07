import { Response } from "express";

interface IResponse {
    message?: string;
    results?: {} | null;
}

interface IFmtResponse {
    success: (res: Response, { message, results }: IResponse) => void;
    error: (res: Response, { message, results }: IResponse) => void;
}

const FmtResponse: IFmtResponse = {
    success: (res: Response, { message, results }) => {
        res.json({
            ok: true,
            message: message ?? "success!",
            results: results ?? {},
        });
    },
    error: (res: Response, { message }) => {
        res.json({
            ok: false,
            message: message ?? "failed!",
        });
    },
};

export default FmtResponse;
