import {UseChatHelpers} from 'ai/react'

import {Button} from '@/components/ui/button'
import {ExternalLink} from '@/components/external-link'
import {IconArrowRight} from '@/components/ui/icons'
import {siteTexts, sitePromts} from '../data/site-texts'


const exampleMessages = [
    {
        heading: siteTexts.ChatTitleEx1,
        message: sitePromts.ChatPromtEx1
    },
    {
        heading: siteTexts.ChatTitleEx2,
        message: sitePromts.ChatPromtEx2
    },
    {
        heading: siteTexts.ChatTitleEx3,
        message: sitePromts.ChatPromtEx3
    },
    {
        heading: siteTexts.ChatTitleEx4,
        message: sitePromts.ChatPromtEx4
    },

]

export function EmptyScreen({setInput}: Pick<UseChatHelpers, 'setInput'>) {
    return (
        <div className="mx-auto max-w-2xl px-4">
            <div className="rounded-lg border bg-background p-8">
                <h1 className="mb-2 text-lg font-semibold">
                    {siteTexts.ChatTitle}
                </h1>
                <p className="mb-2 leading-normal text-muted-foreground text-left">
                    {siteTexts.ChatParagraph}
                </p>
                <p className="leading-normal text-muted-foreground">
                    {siteTexts.ChatSubParagraph}
                </p>
                <div className="mt-4 flex flex-col items-start space-y-2">
                    {exampleMessages.map((message, index) => (
                        <Button
                            key={index}
                            variant="link"
                            className="h-auto p-0 text-base text-left"
                            onClick={() => setInput(message.message)}
                        >
                            <IconArrowRight className="mr-2 text-muted-foreground"/>
                            {message.heading}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}
