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
            <SelectValue placeholder="Number of paragraphs"/>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>

                {ContractSizes.map((size) => (<SelectItem value={size} key={size}>{size.toUpperCase()}</SelectItem>))}

            </SelectGroup>
        </SelectContent>
    </Select>
);

export default ContractSize;