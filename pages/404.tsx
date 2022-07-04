import { NextPage } from 'next';
import PageLayoutView from '../components/PageLayoutView';

const NotFoundPage: NextPage = () => {
  return (
    <PageLayoutView>
      <div>
        <h2>Not found!</h2>
        <p>You can go back using the navbar.</p>
      </div>
    </PageLayoutView>
  );
};

export default NotFoundPage;
