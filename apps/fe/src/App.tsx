import { useEffect, useState } from "react"

function App() {
  const [data,setdata] = useState([])
  const [loading,setloading] = useState(true)
  useEffect(()=>{

    (async ()=>
      {try{let data = await fetch("http://localhost:3001/users")
        data = await data.json()
        console.log(data)
        setdata(data)
        setloading(false)}
        catch(err){
          console.log(err)
        }

      })()



  },[])

  return (


    <>
      {loading? <div>
        Loading... 
      </div>:
      
      
        data.map(el=>{
           return <div>
            {el.username},{
              el.password
            },{el.msg},{"satta velly"}
          </div>
        })
      
    }
    </>
  )
}

export default App
