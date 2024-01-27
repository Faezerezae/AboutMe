import React from 'react'

interface SkillProps {
  skillData: {
    id: number;
    renge: string;
    name: string;
  };
}

export default function Skill({ skillData }: SkillProps) {
  const{renge,name}=skillData;
  return (
    <div>
      <div>
        <span> {name} </span><span>{renge}</span>
      </div>
      <div className="w-full h-6 bg-gray-200 rounded-full p-1">
        <div className="bg-gradient-to-r from-[#766EFF] to-[#87F1FF] h-full text-blue-100 text-center leading-none rounded-full flex justify-center items-center" style={{ width: `${renge}` }}> </div>
      </div>
    </div>
  )
}