'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {
  return (
    <div className="rounded-md border p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2025-07-11' },
          { title: 'Event 2', date: '2025-07-13' },
        ]}
      />
    </div>
  )
}
