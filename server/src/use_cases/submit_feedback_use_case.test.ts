import { SubmitFeedbackUseCase } from "./submit_feedback_use_case"

//spy = permite saber se alguma funcao dentro do teste foi chamada
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


describe('Submit feedback', () => {

    const submitFeedback = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy }, //mock
        { sendMail: sendMailSpy }, //mock
    );

    it('should be able to submit feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'comment feedback',
            screenshot: 'data:image/png;base64.asjasl;aks;l'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();

    });

    it('should not be able to submit feedback without a type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            comment: 'comment feedback',
            screenshot: 'data:image/png;base64.asjasl;aks;l'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without a comment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64.asjasl;aks;l'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with an invalid screenshot ', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'comment feedback',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
})