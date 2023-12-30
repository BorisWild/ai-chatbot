import React from 'react';
import {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'
import {ContractTypes} from '../../data'


const SelectContract = ({contractType, setContactType}) => (
    <Select value={contractType} onValueChange={setContactType}>
        <SelectTrigger>
            <SelectValue placeholder="Choose contract"/>
        </SelectTrigger>
        <SelectContent position='item-aligned'>
            <SelectGroup>
                {ContractTypes.map((item, index) => (
                    <SelectItem key={item + index} value={item}>{item.toUpperCase()}</SelectItem>))}

            </SelectGroup>
        </SelectContent>
    </Select>
);


export default SelectContract