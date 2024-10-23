import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {
    firstName: 'Varun',
    lastName: 'Pithiya',
    email: 'contact@varunpithiya.pro'
  };

  return (
    <section className="home">

      {/* Header Section */}
      <div className="home-header">
        <header className="home-header-content">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        {/* Recent Transactions Section */}
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
