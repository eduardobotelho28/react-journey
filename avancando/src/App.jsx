
import './App.css'
import UserDetails from './components/UserDetails'


function App() {

  const users = [
      {
        name:"eduardo",
        age:"20",
        job: "dev"
      },
      {
        name:"ana ju",
        age:"18",
        job: "sem vergonha"
      },
      {
        name:"kaique",
        age:"7",
        job: "ser chato e brabo"
      }
  ]

  return (
    <>
      {users.map( user => (
        <UserDetails age={user.age} name={user.name} job={user.job} />
      ))}
    </>
  )
}

export default App
