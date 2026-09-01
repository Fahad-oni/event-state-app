import './UserCard.css'
export default function UserCard({ user }) {
  return (
    <div className='user'>
      <h3>Name: {user.name}</h3>
      <h5>ID: {user.id}</h5>
      <p>Email: { user.email}</p>
    </div>
  )
}