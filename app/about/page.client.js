import { text } from 'test-lib'

console.log('text', text)

export default function Page() {
  return <div className='page'>{text}</div>
}
