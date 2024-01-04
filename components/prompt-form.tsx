import * as React from 'react'
import Textarea from 'react-textarea-autosize'
import {UseChatHelpers} from 'ai/react'
import {useEnterSubmit} from '@/lib/hooks/use-enter-submit'
import {Button} from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip'
import {IconArrowElbow,IconEdit} from '@/components/ui/icons'
import {useRouter} from 'next/navigation'
import {siteTexts} from '../data/site-texts'
import ContractDialog from '@/components/dialog/contract-dialog'
import {cn} from '@/lib/utils'
import {buttonVariants} from '@/components/ui/button'
import ParagraphDialog from './dialog/paragraph-dialog'

export interface PromptProps
    extends Pick<UseChatHelpers, 'input' | 'setInput'> {
    onSubmit: (value: string) => void,
    messages: any,
    isLoading: boolean
}

export function PromptForm({
                               onSubmit,
                               input,
                               setInput,
                               isLoading,
                               messages
                           }: PromptProps) {
    const {formRef, onKeyDown} = useEnterSubmit()
    const inputRef = React.useRef<HTMLTextAreaElement>(null)
    const router = useRouter()
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <form
            onSubmit={async e => {
                e.preventDefault()
                if (!input?.trim()) {
                    return
                }
                setInput('')
                await onSubmit(input)
            }}
            ref={formRef}
        >
            <div
                className="relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border sm:px-12">

                <ContractDialog setInput={setInput} onSubmit={onSubmit}/>
                <Textarea
                    ref={inputRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    rows={1}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={messages.length ? "Edit chapters ->" : "<- Create contract"}
                    spellCheck={false}
                    className="text-center min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                />
                
                <div className="absolute right-0 top-4 sm:right-4 flex gap-2">
                <ParagraphDialog onSubmit={onSubmit}  messages={messages}>
                <Tooltip key='tolltip1'>
                    <TooltipTrigger asChild>
                        <div
                            className={cn(
                                buttonVariants({size: 'sm', variant: 'outline'}),
                                'left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4'
                            )}
                        >
                            <IconEdit/>
                        </div>

                    </TooltipTrigger>
                    <TooltipContent>Customize chapters</TooltipContent>
                </Tooltip>
                </ParagraphDialog>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                type="submit"
                                size="icon"
                                disabled={isLoading || input === ''}
                            >
                                <IconArrowElbow/>
                                <span className="sr-only">{siteTexts.LblSendMsg}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>{siteTexts.LblSendMsg}</TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </form>
    )
}
