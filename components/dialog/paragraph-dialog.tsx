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
import {IconArrowElbow, IconTrash, IconRefresh} from '@/components/ui/icons'


const ParagraphDialog = ({children, messages, onSubmit}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [paragraphTotal, setParagraphTotal] = useState(1);
    const [paragraphArr, setParagraphArr] = useState(messages.length>0 ? messages[1].content.split('\n') : []);

    

const ChapterInput = ({messages})=>{

    console.log(messages)
    
    const chaptersText = paragraphArr.join(" ")
    
    
    const regenerateChapter = (paragrapgNumber) => {
        
        const promt=`I'm writing following document: ${'NDA'} with
                    this list of chapters: ${chaptersText}. 
                    Please generate chapter number ${paragrapgNumber} with
                    a lot of paragraphs`

        console.log(promt);

        //set promt input:
        //setInput(promt)

        //submit promt form:
        onSubmit(promt)
        
        setIsOpenModal(false)
    }

    const removeChapter = (paragrapgNumber) => {
        console.log('remove'+paragrapgNumber);

        const filteredArr = paragraphArr.filter(chapter=>chapter!==paragraphArr[paragrapgNumber])

        console.log(filteredArr)

        setParagraphArr(filteredArr)
        
    }

return paragraphArr.map((chapter,i)=>(
        
        <div key={i} className='flex w-full gap-2 flex-row justify-between'>
                        <div >
                            <Button
                                key="b1"
                                type="submit"
                                size="icon"
                                variant="outline"
                                onClick={()=>regenerateChapter(i)}
                                className={cn(buttonVariants({variant: 'outline', size: 'icon'}))}
                            >
                                <IconRefresh/>
                            </Button>

                        </div>
                        <div>
                            <Label>{i+1}.{chapter.split(".")[1] + (chapter.split(".")[2] ?? "")}</Label>
                        </div>
                        <div >
                            <Button
                                key="b2"
                                type="submit"
                                size="icon"
                                onClick={()=>removeChapter(i)}
                            >
                                <IconTrash/>
                            </Button>
                        </div>
        </div>
    )
)
}

    return (
        <Dialog open={isOpenModal} onOpenChange={(isVisible)=>{
            setIsOpenModal(isVisible)
            
            }}>

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