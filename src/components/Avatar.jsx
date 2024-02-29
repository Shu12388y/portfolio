import React from 'react'

export function Avatar() {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="inline-block h-12 w-12 rounded-full"
        src="https://avatars.githubusercontent.com/u/91714143?v=4"
        alt="Dan_Abromov"
      />
      <span className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">Shubham Paul</span>
        <span className="text-sm font-medium text-gray-500">@Shu12388y</span>
      </span>
    </div>
  )
}
