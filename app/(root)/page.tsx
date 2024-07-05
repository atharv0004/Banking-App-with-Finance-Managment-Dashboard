import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home  = () => {

  const loggedIn = { firstName: 'Atharv' , lastName: 'Patil'
    , email: 'atharvpatil781@gmail.com'
  };

  return (
    <section className="home">Home 
    <div className='home-content'>
      <header className='home-header'>
       <HeaderBox 
       type="greeting"
       title="Welcome"
       user={loggedIn?.firstName || 'Guest'}
       subtext="Access and manage your account and transactions efficently"
       />


     <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
      </header>

      recent transactions
    </div>

    <RightSidebar user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50},
                {currentBalance: 123.50}]} />
    </section>
  )
}

export default Home 