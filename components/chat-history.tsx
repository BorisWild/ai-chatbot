'use client'

import * as React from 'react'
import {cn} from '@/lib/utils'
import {SidebarList} from '@/components/sidebar-list'
import {Button, buttonVariants} from '@/components/ui/button'
import {IconPlus} from '@/components/ui/icons'

interface ChatHistoryProps {
    userId?: string
}


export function ChatHistory({userId}: ChatHistoryProps) {


    return (
        <div className="flex flex-col h-full px-2 my-4">
                <Button
                    onClick={() => {
                        window.location.reload();
                      }}
                    
                >
                    <IconPlus className="-translate-x-2 stroke-2"/>
                    New Document
                </Button>
        </div>
    )
}
