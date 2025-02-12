import './App.css'
import Card from './card'
import Child1 from './Child'
import Myimg from './lip.avif'
// import Child3 from './Child3'
// import Child1 from './Child'
function App() {
  // let para={
  //   color:"blue"
  // }

  return (
    <>
      {/* <h1 style={{color:"red"}}>Welcome</h1>

      <p style={para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia minima cumque ab, est similique consequuntur aliquam ad, maiores commodi facilis, incidunt quisquam aliquid corporis ut consectetur. Eligendi, quaerat quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia minima cumque ab, est similique consequuntur aliquam ad, maiores commodi facilis, incidunt quisquam aliquid corporis ut consectetur. Eligendi, quaerat quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia minima cumque ab, est similique consequuntur aliquam ad, maiores commodi facilis, incidunt quisquam aliquid corporis ut consectetur. Eligendi, quaerat quidem?</p> */}
      <nav className="navbar">
        <h1>Logo</h1>
      

      <ul>

        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About</li>

      </ul>
      </nav>

          {/* <section>
            <div>
              <img src="eyesh.webp" alt="" / > 
            <img src={Myimg} alt="" />
            </div>
          </section> */}

          {/* <section>
            <div className="hero_sec">
              <h1>Welcome to hero <br /> section</h1>
              <h1>For more details...</h1>
            </div>

              <div className="hero_img">
                <img src="eyesh.webp" alt="" />
              </div>

              <button className="btn">Click for more details....</button>
          </section> */}
      {/* <Child1 name="Anam" age={27}/> */}
          <Card/>
          <Child3 name="Ali" age ={28}/>

    </>
  )
}

export default App
