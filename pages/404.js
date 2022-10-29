import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const NotFoundPage = () => {
  return (
    <div className='container_404' >
      <h3 className='title_404'>Página no encontrada.</h3>
      <Link href={'/'}>
        <Image
          className='img_fluid'
          src={'/images/404-not-found.svg'}
          alt='error-404'
          width={400}
          height={500}
        />
      </Link>
      <h3 className='description_404'>
        <Link href={'/'} > Ir  al Home </Link>
      </h3>
    </div>
  )
}

export default NotFoundPage