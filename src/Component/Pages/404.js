import React from 'react'
import "../Pages/PageNotFound.css"
import Button from 'react-bootstrap/Button';

 export default function PageNotFound() {
  return (
    <div className='hide-nav-bar'>
      <h1 className='py-4 heading'>Ooops!</h1><br />
      <h2 className='py-4 heading2'>The page you are looking for doesn't exist!</h2>
      <div className='center'>
        <a href='/'>
          <Button className='btn' variant="primary">
            Go To Home
          </Button></a>
      </div>
    </div>
  );
}