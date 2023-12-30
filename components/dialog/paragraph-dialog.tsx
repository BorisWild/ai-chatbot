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


const ParagraphDialog = ({children}) => {

    const [paragraphTotal, setParagraphTotal] = useState(1);
    const [paragraphArr, setPparagraphArr] = useState([]);


    return (
        <Dialog>


            <DialogTrigger>
                {children}
            </DialogTrigger>


            <DialogContent>
                <DialogTitle>Create Paragraphs</DialogTitle>
                <DialogDescription className="DialogDescription">
                    Choose theme for each chapter by writing the title of paragrapgh.
                </DialogDescription>


                <Label>Size of text: </Label>


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