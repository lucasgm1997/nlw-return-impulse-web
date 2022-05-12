import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from './use_cases/submit_feedback_use_case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma_feedback_repository';
import { NodemailerMailAdapter } from './nodemailer/nodemailer_mail_adapter';

export const routes  = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2369894c108bd5",
      pass: "bac9a0c461caa8"
    }
  });

routes.post('/feedbacks', async (req, res) => {

    const {type, comment, screenshot} = req.body;

    const prisma_feedback_repository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submit_feedback_use_case = new SubmitFeedbackUseCase(prisma_feedback_repository, nodemailerMailAdapter);

    await submit_feedback_use_case.execute({type, comment, screenshot});

    return res.status(201).send();

    // return res.status(201).json({data: feedback});
});