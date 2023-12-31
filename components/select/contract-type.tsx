import React from 'react';
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'
import {contractTypes} from '../../data/contract-types'


const SelectContract = ({contractType, setContactType}) => (
    <Select value={contractType} onValueChange={setContactType}>
        <SelectTrigger>
            <SelectValue placeholder="Choose contract"/>
        </SelectTrigger>
        <SelectContent position='item-aligned'>
            <SelectGroup>
                {contractTypes.map((item, index) => (
                    <SelectItem key={item + index} value={item}>{item.toUpperCase()}</SelectItem>))}

            </SelectGroup>
        </SelectContent>
    </Select>
);


export default SelectContract