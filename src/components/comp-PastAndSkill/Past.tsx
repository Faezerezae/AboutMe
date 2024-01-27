import React from 'react'


interface PastProps {
    pastData: {
        id: number;
        icon: string;
        tittle: string;
        description: Array<string>;
    };
}

export default function Past({ pastData }: PastProps) {
    const{icon,tittle,description}=pastData;
    return (
        <div className='shadow-lg border-gray-500 w-52 h-52 grid items-center justify-center p-4 content-center gap-5'>
            <div className="text-center"><i className={icon}></i></div>
            <div className="text-[12px] grig gap-4 items-start justify-start">
                <h1 className='text-[12px] font-bold'>{tittle}</h1>
                <ul className='text-gray-600 text-[10px] grid gap-1 py-1'>
                    {description.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}