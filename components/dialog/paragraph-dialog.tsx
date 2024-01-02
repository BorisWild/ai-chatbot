import React, {useState} from 'react';
import {Cross2Icon} from '@radix-ui/react-icons';
import {Label} from '@radix-ui/react-label';
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


const ParagraphDialog = ({children, messages}) => {

    const [paragraphTotal, setParagraphTotal] = useState(1);
    const [paragraphArr, setPparagraphArr] = useState([]);

console.log(messages);

    return (
        <Dialog>


            <DialogTrigger>
                {children}
            </DialogTrigger>


            <DialogContent>
                <DialogTitle>Edit Chapters</DialogTitle>
                <DialogDescription className="DialogDescription">
                    Your chapters:
                </DialogDescription>


                
                {messages.map((item)=><Label>{item.content}</Label>)}

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