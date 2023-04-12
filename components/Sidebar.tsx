"use client";
import { useEffect } from 'react';

interface SidebarProps {
    page: {
        name: string;
        components: Array<JSX.Element>;
    };
}

export default function Sidebar({ page: { name, components } }: SidebarProps) {
    return (
        <div className="flex flex-col h-auto lg:w-64 lg:border-c-ghost lg:border-r-2 lg:h-full lg:shrink-0">
            <div className="flex flex-col lg:flex-row h-full">
                <div className="flex lg:hidden px-5 py-4 lg:h-full">
                    <span className="text-sm">{name}</span>
                </div>
                <div className="flex flex-col h-auto lg:w-64 lg:border-c-ghost lg:border-r-2 lg:h-full lg:shrink-0">
                    {
                        components.map((component, index) => {
                            return (
                                <div key={index}>
                                    {component}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
