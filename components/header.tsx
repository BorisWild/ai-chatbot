import * as React from 'react'
import Link from 'next/link'

import {cn} from '@/lib/utils'
import {auth} from '@/auth'

import {Button, buttonVariants} from '@/components/ui/button'

import {
    IconEdit,
    IconNextChat,

    IconUser
} from '@/components/ui/icons'

import {ThemeToggle} from '@/components/theme-toggle'


import {SidebarMobile} from './sidebar-mobile'
import {SidebarToggle} from './sidebar-toggle'
import {ChatHistory} from './chat-history'

async function UserOrLogin() {
//    const session = await auth()
    return (
        <>
            <Link href="/" target="_blank" rel="nofollow">
                <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted/>
                <IconNextChat className="hidden w-6 h-6 mr-2 dark:block"/>
            </Link>
        </>
    )
}

export function Header() {
    return (
        <header
            className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
            <div className="flex items-center">
                <React.Suspense fallback={<div className="flex-1 overflow-auto"/>}>
                    <UserOrLogin/>
                </React.Suspense>
            </div>
            <div className="flex items-center justify-end space-x-2">
                <a
                    target="_blank"
                    href={process.env.REGISTRATION_URL ?? "http://157.230.176.26/app/login"}
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({variant: 'outline'}))}
                >
                    <IconUser/>
                    <span className="ml-2 md:flex">Login</span>
                </a>
                <a
                    href={process.env.LOGIN_URL ?? "http://157.230.176.26/app/register"}
                    target="_blank"
                    className={cn(buttonVariants())}
                >
                    <IconEdit className="mr-2"/>
                    <span className="sm:block">Register</span>
                </a>

                <ThemeToggle/>

                <SidebarMobile>
                    <ChatHistory userId={'1'}/>
                </SidebarMobile>

                <SidebarToggle/>
            </div>
        </header>
    )
}
