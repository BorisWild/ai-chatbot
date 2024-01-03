import React, {useState} from 'react';
import {Cross2Icon} from '@radix-ui/react-icons';
import {Label} from '@/components/ui/label';
import
{
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription
} from '@/components/ui/dialog'

import {cn} from '@/lib/utils'
import {buttonVariants} from '@/components/ui/button'

import {Button} from '@/components/ui/button'
import {IconArrowElbow, IconPlus, IconRefresh} from '@/components/ui/icons'


const ParagraphDialog = ({children, messages}) => {

    const [paragraphTotal, setParagraphTotal] = useState(1);
    const [paragraphArr, setPparagraphArr] = useState([]);



const ChapterInput = ({messages})=>{

    console.log(messages);
    const chaptersArr = messages[1].content.split('\n')
const regenerateChapter = () => {
    console.log('regenerate');
    
}

const removeChapter = () => {
    console.log('remove');
    
}

return chaptersArr.map((chapter,i)=>(
        
        <div key={i} className='flex w-full gap-2 items-center'>
                            <Button
                                key="b1"
                                type="submit"
                                size="icon"
                                variant="outline"
                                onClick={regenerateChapter}
                                className={cn(buttonVariants({variant: 'outline', size: 'icon'}))}
                            >
                                <IconRefresh/>
                            </Button>
                            <Button
                                key="b2"
                                type="submit"
                                size="icon"
                                onClick={removeChapter}
                            >
                                <IconArrowElbow/>
                            </Button>
                            <Label>{chapter}</Label>
                        </div>
        
    )
)
}

    return (
        <Dialog>


            <DialogTrigger>
                {children}
            </DialogTrigger>


            <DialogContent className='h-4/5'>
                <DialogTitle>Edit Chapters</DialogTitle>
                <DialogDescription className="DialogDescription">
                    Your chapters:
                </DialogDescription>

                {!messages.length && "Create Contract"}
                
                {messages.length && <ChapterInput messages={messages}/>}

                <div style={{display: 'flex', marginTop: 25, justifyContent: 'flex-end'}}>
                    <DialogClose/>
                </div>
                <DialogClose asChild>
                    <button className="IconButton" aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </DialogClose>
            </DialogContent>

        </Dialog>
    )
}

export default ParagraphDialog;