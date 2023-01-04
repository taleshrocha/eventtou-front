export default function EventForm() {
  return (
    <div className=''>
      <form action='' method=''>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' required />

        <label htmlFor='place'>Place</label>
        <input type='text' id='place' name='place' required />

        <label htmlFor='date'>Date</label>
        <input type='date' id='date' name='date' required />
      </form>
    </div>
  )
}
