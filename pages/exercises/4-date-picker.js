import { useState } from 'react'
import DateFields from '@components/DatePicker.js'

export default function Dates() {
  const [startDate, setStartDate] = useState(new Date('May 28, 2020'))
  return (
  <DateFields value={startDate} onChange={setStartDate}>
    <MonthField aria-label="Start Month" />
    <DayField aria-label="Start Day" />
    <YearField start={2018} end={2019} aria-label="Start year" />
  </DateFields><DateFields value={startDate} onChange={setStartDate} start={2010} end={2020} />
  )
}
