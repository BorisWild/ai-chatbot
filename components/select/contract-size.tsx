import React from 'react';
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'
import {ContractSizes} from '../../data/site-texts'
import {Label} from '@radix-ui/react-label';

const ContractSize = ({contractSize, setContactSize}) => (  
    <div className='my-2'>
        <Label>Size of document: </Label>
        
        <Select value={contractSize} onValueChange={setContactSize}>
            <SelectTrigger>
                <SelectValue placeholder="Choose size"/>
            </SelectTrigger>
            <SelectContent position='item-aligned'>
                <SelectGroup>
                    {ContractSizes.map((size) => (<SelectItem key={size} value={size}>{size.toUpperCase()}</SelectItem>))}

                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
);

export default ContractSize;