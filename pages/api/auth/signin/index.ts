import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";

const router = createRouter<NextApiRequest, NextApiResponse>();


router.use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
})
    .post((req, res) => {
        res.json({ message: "SIGNIN ROUTE" });
    });



export default router.handler({
    onError: (err, req, res) => {
        console.error((err as any).stack);
        res.status((err as any).statusCode || 500).end((err as any).message);
    },
});