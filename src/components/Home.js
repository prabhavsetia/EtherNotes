import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container my-3'>
        <h1>Add a note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-primary">Submit</button>
        </form >
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
      </div>
    </div>
  )
}

export default Home
