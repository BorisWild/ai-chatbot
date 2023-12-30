import React from 'react';
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'
import {ContractSizes} from '../../data'

const ContractSize = ({contractSize, setContactSize}) => (
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
);

export default ContractSize;