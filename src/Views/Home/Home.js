import React from 'react';
import { withRouter } from 'react-router';

import withAuth from '../../Components/withAuth';
import Header from '../../Components/Header/Header';
import Feed from '../../Components/Feed/Feed';
import { ThemeContext } from '../../ThemeProvider';


export default withRouter(withAuth(function Home() {
  const {
    user, chirps, handleFilter, addPost, filter,
  } = this.props.authProps;
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div
          className={`App
          ${theme.lightBlueBackground}
          ${theme.blackBackground}`}
        >
          <Header
            handleFilter={handleFilter}
            addPost={addPost}
            user={user.attributes}
            filter={filter}
          />
          {chirps ? <Feed chirps={chirps} /> : null}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}));
