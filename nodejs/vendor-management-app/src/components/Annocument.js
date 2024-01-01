import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/8-1-282x280.jpg' width='120px' height='20px' alt="dhyd" />
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/8-1-282x280.jpg' width='120px' height='20px' alt="ddjwe" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
