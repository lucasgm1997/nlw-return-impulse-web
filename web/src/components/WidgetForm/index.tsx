import bugImagUrl from '../../assets/bug.svg'
import ideaImagUrl from '../../assets/idea.svg'
import thoughtImagUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FacebookLogo } from 'phosphor-react';
import { FeedBackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImagUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImagUrl,
            alt: 'Image de uma ideia'
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImagUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;
// type values = typeof feedbackTypes[keyof typeof feedbackTypes];
// type ValueOf<feedbackTypes> = feedbackTypes[keyof feedbackTypes];

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    


    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative   rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedBackSuccessStep  onFeedbackRestartRequested = {handleRestartFeedback}/>
            )   :   (
                <>
                {!feedbackType ?(
                    <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                ) : (
                    <FeedBackContentStep
                        feedbackType={feedbackType}
                        onFeedbackRestartRequested = {handleRestartFeedback}
                        onFeedbackSent = {()=> setFeedbackSent(true)}
                    />
                )}
            </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com amor pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}