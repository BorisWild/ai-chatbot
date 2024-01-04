import React, {useEffect, useState} from 'react';
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
import {IconTrash, IconRefresh} from '@/components/ui/icons'
import { Badge,badgeVariants } from '../ui/badge';

const INITIAL_MSG_NUMBER =1 

const ParagraphDialog = ({children, messages, onSubmit, documentType}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [chapterListMsgNumber, setChapterListMsgNumber]=useState(INITIAL_MSG_NUMBER)
    const [listChaptersMode, setListChaptersMode]=useState(true)
    const [paragraphArr, setParagraphArr] = useState([]);

    useEffect(()=>{
        setListChaptersMode(true)
        setParagraphArr([])

 setChapterListMsgNumber(INITIAL_MSG_NUMBER)
    },[documentType])


    const getLastChaptersMsgNumber = ()=>{
        console.log('MsgNumber:'+(messages.length-1))
        console.log('listChaptersMode:'+(listChaptersMode))

        listChaptersMode && setChapterListMsgNumber(messages.length-1)

        console.log('chapterListMsgNumber',chapterListMsgNumber)
        
        return chapterListMsgNumber
    }

    const ChapterInput = ({messages})=>{
        
        const msgIndex = getLastChaptersMsgNumber();
        const chaptersArr = paragraphArr.length 
                                ? paragraphArr 
                                : messages[msgIndex]?.content ? messages[msgIndex].content.split('\n') : []
        
        
        const regenerateChapter = (paragraphNumber) => {
            setListChaptersMode(false)
            getLastChaptersMsgNumber()
           

            const chaptersText = (chaptersArr.map((chapter)=>chapter.split('.')[1])).join(", ")
            const selectedChapter = chaptersArr[paragraphNumber-1].split('.')[1]

            const promt=`I'm writing following document: ${ documentType || 'NDA'} with
                        the list of chapters: ${chaptersText}. 
                        Please generate chapter: ${selectedChapter}, with
                        a lot of paragraphs`

            //set promt input:
            //setInput(promt)

            //submit promt form:
            onSubmit(promt)
            
            setIsOpenModal(false)
        }

        const removeChapter = (paragrapgNumber) => {chaptersArr
            const filteredArr = chaptersArr.filter(chapter=>chapter!=chaptersArr[paragrapgNumber-1])

            setParagraphArr(filteredArr)
            
        }
        
        return chaptersArr.map((chapter,i)=>(
            
            <div key={i} >
                            <div>
                                <Label>{i+1}.{chapter.split(".")[1] + (chapter.split(".")[2] ?? "")}</Label>
                            </div>
                            
                            <div className='flex w-full gap-2 flex-row justify-end'>
                                
                                    <Button
                                        type="submit"
                                        size="sm"
                                        variant="outline"
                                        onClick={()=>regenerateChapter(i+1)}
                                        className={cn(buttonVariants({variant: 'outline', size: 'sm'}))}
                                    >
                                        <IconRefresh className='mr-2'/>
                                        Rewrite
                                    </Button>
                                
                                <Button
                                    key="b2"
                                    type="submit"
                                    size="icon"
                                    onClick={()=>removeChapter(i+1)}
                                >
                                    <IconTrash/>
                                </Button>
                            </div>
            </div>
        )
    )}

    return (
        <Dialog open={isOpenModal} onOpenChange={(isVisible)=>{
            setIsOpenModal(isVisible)
            
            }}>

            <DialogTrigger>
                {children}
            </DialogTrigger>


            <DialogContent className='h-4/5'>
                <DialogTitle>{documentType}</DialogTitle>
                <DialogDescription className="DialogDescription">
                    {messages.length>0 && 'Edit chapters:'}
                </DialogDescription>

                {!messages.length && 
                
                <Badge
                    className={cn(badgeVariants(), ['w-3/5', 'h-10'])}
                >
                    Empty Document
                </Badge>}
                
                {messages.length>0 && <ChapterInput messages={messages}/>}

                <div style={{display: 'flex', marginTop: 25, justifyContent: 'flex-end'}}>
                    <DialogClose/>
                </div>
                <DialogClose asChild className='flex justify-center items-center'>
                    <button className="IconButton" aria-label="Close">
                        <Cross2Icon/>
                    </button>
                </DialogClose>
            </DialogContent>

        </Dialog>
    )
}

export default ParagraphDialog;