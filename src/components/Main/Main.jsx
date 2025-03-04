import React from 'react'
import "./Main.scss"

const Main = () => {
  return (
    <main>
    <div className='main_container'>

        <div className="main_text">
            <h1>Projects</h1>

            <button>CONTACT ME</button>
        </div>

        <div className="parents-tab">
  <div className="tab">
    <img src="public/Bitmap.png" alt="" />
    <button>VIEW PROJECT</button>
    <button>VIEW CODE</button>
  </div>

  <div className="tab">
    <img src="public/Bitmap (1).png" alt="" />
    <button>VIEW PROJECT</button>
    <button>VIEW CODE</button>
  </div>

  <div className="tab">
    <img src="public/Bitmap (2).png" alt="" />
    <button>VIEW PROJECT</button>
    <button>VIEW CODE</button>
  </div>
  <div className="tab">
    <img src="public/Bitmap (3).png" alt="" />
    <button>VIEW PROJECT</button>
    <button>VIEW CODE</button>
  </div>
  <div className="tab">
    <img src="public/Bitmap (4).png" alt="" />
    <button>VIEW PROJECT</button>
    <button>VIEW CODE</button>
  </div>
  <div className="tab">
    <img src="public/Bitmap (5).png" alt="" />
    <button>VIEW PROJECT</button>
    <button>VIEW CODE</button>
  </div>
</div>




    </div>
    </main>
  )
}

export default Main