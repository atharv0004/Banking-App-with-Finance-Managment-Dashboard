import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home  = async () => {

  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">Home 
    <div className='home-content'>
      <header className='home-header'>
       <HeaderBox 
       type="greeting"
       title="Welcome"
       user={loggedIn?.name|| 'Guest'}
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