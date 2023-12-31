import "./styles.css";
import { startTransition, useMemo, useState } from "react";
import * as Ariakit from "@ariakit/react";
import { matchSorter } from "match-sorter";
import { contractTypes as list} from '../../data/contract-types'
import {
    IconChevronUpDown
} from '@/components/ui/icons'
import {Label} from '@radix-ui/react-label';


export default function ContractTypeSelect({contractType,setContactType}) {
  const matches = useMemo(() => matchSorter(list, contractType), [contractType]);

  return (
    <div className='my-2'>
      <Label>Type of document: </Label>
      <Ariakit.ComboboxProvider
        setValue={(value) => {
          startTransition(() => setContactType(value));
        }}
      >
        <div className="combobox-wrapper">
          <Ariakit.Combobox placeholder="Search..." className='flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' />
          <Ariakit.ComboboxDisclosure className="button secondary disclosure" >
          <IconChevronUpDown className="opacity-50"/>
          </Ariakit.ComboboxDisclosure>
        </div>
        <Ariakit.ComboboxPopover gutter={8} sameWidth className="popover">
          {matches.length ? (
            matches.map((value) => (
              <Ariakit.ComboboxItem
                key={value}
                value={value.toUpperCase()}
                className="combobox-item"
              >
              {value.toUpperCase()}
              </Ariakit.ComboboxItem>
            ))
          ) : (
            <div className="no-results">No results</div>
          )}
        </Ariakit.ComboboxPopover>
      </Ariakit.ComboboxProvider>
    </div>
  )}