import React from 'react'
import Link from 'next/link';

import Container from './Container';

import {MdFacebook} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='bg-primaryColor text-slate-100 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-8 pb-5'>

          <FooterColumn>
            <h3 className='text-base font-bold mb-2'>Products</h3>
            <Link href='#'>T-Shirts</Link>
            <Link href='#'>Jeans</Link>
            <Link href='#'>Dresses</Link>
            <Link href='#'>Jackets</Link>
            <Link href='#'>Bags & Purses</Link>
            <Link href='#'>Shoes</Link>
            <Link href='#'>Hats & Scarves</Link>
          </FooterColumn>

          <FooterColumn>
            <h3 className='text-base font-bold mb-2'>Outfits</h3>
            <Link href='#'>Street Wear</Link>
            <Link href='#'>Formal Outfits</Link>
            <Link href='#'>Vintage Vibe</Link>
            <Link href='#'>Summer Vacation</Link>
            <Link href='#'>Weekend Casual</Link>
          </FooterColumn>

         <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-base font-bold mb-2'>Contact Us</h3>
            <span className='mb-2'>Phone : +216 22228464</span> <br />
            <span className='mb-2'>Email : Medboukthir7@gmail.com</span>
          </div>


          <FooterColumn>
            <h3 className='text-base font-bold mb-2'>Follow Us</h3>
              <div className='flex gap-2'>
                <Link href='https://www.facebook.com/mo74med.b'>
                  <MdFacebook size={24} />
                </Link>
                <Link href='https://www.instagram.com/hamaboukthir.exe/'>
                  <AiFillInstagram size={24} />
                </Link>
              </div>
          </FooterColumn>
        </div>

        <div>
          <p className="footer__copyright">
             &copy; {new Date().getFullYear()} Freeppy. All Rights Reserved. <br />
             This Website Developed By <b> @Mohamed Boukthir</b>.
          </p>
        </div>

      </Container>
    </footer>
  )
}

type FooterColumnProps = {
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
      {children}
    </div>
  )
}

export default Footer