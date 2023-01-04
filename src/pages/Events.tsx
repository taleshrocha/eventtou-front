import { EventsBanner } from '../components/EventsBanner';
import { SearchBar } from '../components/SearchBar';
//import axios from 'axios';
import { useEffect, useState } from 'react';

interface Event {
  id: number;
  name: string;
  address: string;
}

export function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  // useEffect(() => {
  //   axios("http://localhost:8080/eventos")
  //     .then(response => {
  //       //setEvents(response.data)
  //       console.log(response.data)
  //     })
  // })

  return (
    <div className="mx-auto flex flex-col items-center my-20 overflow-y-auto">

      <SearchBar />

      <div className="grid grid-cols-3 gap-2 mt-16 mx-16">

        <EventsBanner
          name="Geração Geek"
          place="Natal RN"
          day={12}
          month={12}
          year={2022}
        />

        <EventsBanner
          name="Geração Geek"
          place="Natal RN"
          day={12}
          month={12}
          year={2022}
        />

        <EventsBanner
          name="Geração Geek"
          place="Natal RN"
          day={12}
          month={12}
          year={2022}
        />

        <EventsBanner
          name="Geração Geek"
          place="Natal RN"
          day={12}
          month={12}
          year={2022}
        />

        <EventsBanner
          name="Geração Geek"
          place="Natal RN"
          day={12}
          month={12}
          year={2022}
        />

      </div>
    </div>
  )
}
