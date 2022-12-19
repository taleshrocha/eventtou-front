import { CalendarBlank, MapPin } from 'phosphor-react'
import { useState } from 'react';

interface eventsBannerProps {
  name: string;
  place: string;
  day: number;
  month: number;
  year: number;
}

export function EventsBanner(props: eventsBannerProps) {
  const [isInfo, setIsInfo] = useState(false)

  return (
    <button
      className="relative rounded-lg overflow-hidden text-left"
      onClick={() => setIsInfo(true)}
    >
      <img src="\evento-1.png" alt="" />
      <div className="w-full py-4 px-4 bg-neutral-800">
        <span className="mb-1 text-sm text-neutral-400 flex">
          <CalendarBlank size={16} />
          {props.day}/{props.month}/{props.year}
        </span>
        <strong className="font-bold block text-neutral-100">{props.name}</strong>
        <span className="mt-4 text-sm text-neutral-400 flex">
          <MapPin size={16} />
          {props.place}
        </span>
      </div>
    </button>
  )
}
