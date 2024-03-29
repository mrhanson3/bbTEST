import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Button from '@material-ui/core/Button';

import notify from '../../lib/notifier';

import withAuth from '../../lib/withAuth';
import { getBookList } from '../../lib/api/admin';

import theme from '../../lib/theme';

const Index = ({ books }) => (
  <div style={{ padding: '10px 45px' }}>
    <div>
      <h2>Stories</h2>
      <Link href={`/index`}>
      <p style={{backgroundColor: "khaki"; padding: "10px"}}>Hi. I'm still working out what to do with these user homepages, but until then, click here to check out some stuff I made.</p>
      </Link>
      <ul>
        {books.map((b) => (
          <li key={b._id}>
            <Link as={`/admin/book-detail/${b.slug}`} href={`/admin/book-detail?slug=${b.slug}`}>
              <a>{b.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <br />
    </div>
  </div>
);

const propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Index.propTypes = propTypes;

class IndexWithData extends React.Component {
  // eslint-disable-next-line
  state = {
    books: [],
  };

  async componentDidMount() {
    try {
      const { books } = await getBookList();
      this.setState({ books });
    } catch (err) {
      notify(err);
    }
  }

  render() {
    return <Index {...this.state} />;
  }
}

export default withAuth(IndexWithData, { adminRequired: true });
