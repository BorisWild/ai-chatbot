import React, {useState} from 'react';

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip'

import {cn} from '@/lib/utils'
import {buttonVariants} from '@/components/ui/button'

import {Button} from '@/components/ui/button'
import {IconArrowElbow, IconPlus, IconRefresh} from '@/components/ui/icons'
import ContractSize from '../select/contract-size';

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
import ContractTypeSelect from '../combobox/contract-type-combo';


const ContractDialog = ({setInput}) => {
    const [contractType, setContactType] = useState('')
    const [contractSize, setContactSize] = useState('small')
    const [isOpenModal, setIsOpenModal] = useState(false);

    const makePromt = () => {
        setInput(`Make the following contract: ${contractType || 'NDA'}. Make it ${contractSize} in size.`)
        setIsOpenModal(false)
    }

    const clearPromt = (e) => {
        e.preventDefault()
        setInput('')
        setContactType('')
        setContactSize('small')
    }


    return (
        <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
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


                <div className="flex flex-col gap-2">
                    
                    <ContractTypeSelect
                        contractType={contractType}
                        setContactType={setContactType}
                    />
                    {/* <SelectContract
                        key='SelectContract1'
                        contractType={contractType}
                        setContactType={setContactType}
                    /> */}
                   
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