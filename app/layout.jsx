import Footer from '@/components/Footer'
import '../styles/globals.css'


export const metadata = {
    title: "Keeper-App",
    description: "Personal project using NextJs"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
         
        <main className='relative'>
      
          
          {children}
          <Footer />
            </main>
      </body>    
    </html>
  )
}

export default RootLayout;