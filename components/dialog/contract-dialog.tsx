import React, {useState} from 'react';
import SelectContract from '../select/contract-type';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip'

import {cn} from '@/lib/utils'
import {buttonVariants} from '@/components/ui/button'
import {siteTexts} from '../../data'

import {Button} from '@/components/ui/button'
import {IconArrowElbow, IconPlus, IconRefresh} from '@/components/ui/icons'
import ContractSize from '../select/contract-size';

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
import ParagraphDialog from '@/components/dialog/paragraph-dialog'


const ContractDialog = ({setInput}) => {
    const [contractType, setContactType] = useState('NDA');
    const [contractSize, setContactSize] = useState('small');


    const makePromt = () => {
        setInput(`Make the following contract: ${contractType}. Make it ${contractSize} in size.`)
    }

    const clearPromt = (e) => {
        e.preventDefault()
        setInput('')
        setContactType('')
    }


    return (
        <Dialog>
            <DialogTrigger>
                <Tooltip>
                    <TooltipTrigger asChild>

                        <div
                            className={cn(
                                buttonVariants({size: 'sm', variant: 'outline'}),
                                'absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4'
                            )}
                        >
                            <IconPlus/>
                        </div>

                    </TooltipTrigger>
                    <TooltipContent>New Contract</TooltipContent>

                </Tooltip>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Create Contract</DialogTitle>
                <DialogDescription className="DialogDescription">
                    Make your contract here. Click arrow and choose your contract type.
                </DialogDescription>


                <div className="flex flex-col" key='dsdsd'>
                    <div className='my-2' key='d1'>
                        <Label className='my-2'>Type of document: </Label>
                    </div>
                    <SelectContract
                        key='SelectContract1'
                        contractType={contractType}
                        setContactType={setContactType}
                    />
                    <div className='my-2' key='d2'>
                        <Label>Size of text: </Label>
                    </div>
                    <ContractSize
                        key='ContractSize1'
                        contractSize={contractSize}
                        setContactSize={setContactSize}
                    />
                    {/* <ParagraphDialog>
                <Button
                  type="submit"
                  size="sm"
                  className={cn(buttonVariants({ size:'md'}))+" w-full"}
                >
                  <IconRefresh />
                  <span>Customize chapters</span>
                </Button>
              </ParagraphDialog> */}

                    <DialogFooter>
                        <div className='mt-3.5 flex w-full justify-between'>
                            <Button
                                key="b1"
                                type="submit"
                                size="icon"
                                variant="outline"
                                onClick={clearPromt}
                                className={cn(buttonVariants({variant: 'outline', size: 'icon'}))}
                            >
                                <IconRefresh/>
                            </Button>
                            <Button
                                key="b2"
                                type="submit"
                                size="icon"
                                onClick={makePromt}
                            >
                                <IconArrowElbow/>
                            </Button>
                        </div>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ContractDialog;