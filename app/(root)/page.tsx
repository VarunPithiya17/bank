import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  // Fetch logged-in user information
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">

      {/* Header Section */}
      <div className="home-header">
        <header className="home-header-content">
          
          {/* Greeting Box */}
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          
          {/* Total Balance Box */}
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        {/* Recent Transactions Title */}
        <h2 className="recent-transactions-title">Recent Transactions</h2>
      </div>

      {/* Right Sidebar Section */}
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 123.50 },
          { currentBalance: 500.50 }
        ]}
      />
      
    </section>
  );
};

export default Home;
