import { useState } from 'react'
import './App.css'

function App() {

  return (
    <main>
      <TheNav />
    </main>
  )
}

function TheNav() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="thenav w-full navbar bg-primary h-32">

          {/* Rashad's Name */}
          <div className="flex-1 px-2 mx-2" id='rashads-hold'>
            <a id='rashads-name' href='https://rashads-web-development-portofolio.vercel.app/' target='_blank'>
              Rashad's</a></div>

          {/* Drawer Icon */}
          <div className="flex-none">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
        </div>

        {/* title */}
        <img className='todo-list-icon' src="/todo-list-icon.jpg" alt="todo list icon" />
        <h5 className="main-title text-4xl text-center mt-10 font-semibold">Simple Steps to Great Achievements</h5>
        <TheBody />
      </div>

      {/* Side Nav */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-content text-white">
          <h2>Why <span>Rashad's</span> Todo List?</h2>
          <li className='sidenav-comp'><a>- Dynamic and Responsive designs</a></li>
          <li className='sidenav-comp'><a>- Functionally Fast and Stable</a></li>
          <li className='sidenav-comp'><a>- Versatile and Reliable</a></li>
          <li className='sidenav-comp'><a>- Easy to use</a></li>
        
        {/* dropdown */}
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="comp-used btn m-1 bg-primary-focus text-lime-50 font">Components Used in Project</label>
            <ul tabIndex={0} className="relative dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
              <li className='text-black'><a>HTML5</a></li>
              <li className='text-black'><a>CSS3</a></li>
              <li className='text-black'><a>JavaScript</a></li>
              <li className='text-black'><a>React Js</a></li>
              <li className='text-black'><a>Tailwind CSS</a></li>
              <li className='text-black'><a>Daisy UI</a></li>
            </ul>
          </div>

        {/* footer part */}
          <footer className="footer footer-center flex-col mt-auto h-64 bg-primary text-primary-content">
            <div>
              <img src="/Rashad's Tag Pic-PhotoRoom.png" width={75} alt="rashad's logo" className='mt-1'/>
              <p className="font-bold">
                Rashad's Web Dev. <br />Providing "Customer-Oriented" websites.
              </p>
              <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div>
              <div className="grid grid-flow-col gap-4 ">
                <a href='https://twitter.com/supermody1997' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a href='https://github.com/ahmed-adel2' target='_blank'><img src='/github-icon.svg' width="24" height="24" viewBox="0 0 24 24" className='fill-current cursor-pointer'/></a>
                <a href='https://www.facebook.com/supermody1997/' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              </div>
            </div>
          </footer>

        </ul>
      </div>
    </div>
  )
}

function TheBody() {
  const [word, setWord] = useState("")
  const [list, setList] = useState([])

  function addToList() {
    // setList(list.concat(word)) just like the line below *that's auto-complete*
    { word === "" ? "" : setList(prev => [...prev, word]) }
  }

  const allListItems = list.map((list, index) => (
    <li key={index}>{list}</li>
  ))

  function saveToLocal() {
    if(allListItems!=""){
      localStorage.setItem("list", JSON.stringify(list))
    }
    getLocal()
  }

  function getLocal() {
    if (JSON.parse(localStorage.getItem("list"))) {
      return JSON.parse(localStorage.getItem("list")).map((each, index) => (
        <li key={index}>{each}</li>
      ))
    } else {
      return <h2 className='not-found'>- No Todo List found 😢</h2>
    }
  }

  function deleteFromLocal() {
    localStorage.removeItem("list")
    setList([])
  }

  return (
    <main>
      {/* the input field */}
      <div className="form-control w-full max-w-sm ml-auto mr-auto mt-10">
        <label className="label">
          <i className="label-text font-medium italic text-lg">Your Todo Item</i>
        </label>
        <input type="text" placeholder="Type here"
          value={word} onChange={(e) => setWord(e.target.value)}
          className="input input-bordered input-success w-full text-lg placeholder:text-base"
        />
        <button className="btn btn-secondary max-w-fit ml-auto mt-3"
          onClick={addToList}
        >Add Item</button>
      </div>

      {/* the shown list */}
      <div className='list-display'>
        <ol>
          <h2 className='prev-list'>• Previously Saved List:</h2>
          {getLocal()}
        </ol>
        <ol>
          <h2 className='new-list'>• New List:</h2>
          {allListItems}
        </ol>
      </div>

      {/* buttons */}
      <div className='buttons-part'>
          {/* Saved btn */}
        { allListItems ==""?
        <button className="btn btn-outline btn-warning" disabled>Save</button>
        :
          <div onClick={saveToLocal}>
            <label htmlFor="my-modal-4" className="btn btn-outline btn-warning">Save</label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-lg font-bold">Your Todo List is Saved Successfully!</h3>
                <p className="py-4">Don't forget to always stick to your plans as much as possible. It's all about the very tiny steps that make the difference 🤸‍♂️</p>
              </label>
            </label>
          </div>
        }

        {/* Reset btn */}
        <div onClick={deleteFromLocal}>
          <label htmlFor="my-modal" className="btn btn-outline btn-error">Reset</label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <label htmlFor="my-modal" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-lg font-bold">Your Todo List has been reset!</h3>
                <p className="py-4">Return back whenever you have any tasks to do 🤗</p>
              </label>
            </label>
          </div>
      
      </div>
    </main>
  )
}

export default App
