import connectMongo from '../../../utils/mongodb'
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";
import Question from "@/models/Question";

const router = createRouter<NextApiRequest, NextApiResponse>();


router.use(async (req, res, next) => {
    const start = Date.now();
    await next(); // call next in chain
    const end = Date.now();
    console.log(`Request took ${end - start}ms`);
})
    .post(async(req, res) => {
        const questions = await Question.find().populate(
            "options"
        );

        res.json({ message: "SIGNUP ROUTE" , questions});
    });



export default router.handler({
    onError: (err, req, res) => {
        console.error((err as any).stack);
        res.status((err as any).statusCode || 500).end((err as any).message);
    },
});