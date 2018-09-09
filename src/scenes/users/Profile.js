import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { graphql } from 'react-apollo';
import USER_QUERY from '../../graphql/users/user_query.gql';

import Header from '../../components/profile/Header';
import Main from '../../components/profile/Main';
import Badges from '../../components/profile/Badges';
import Follows from '../../components/profile/Follows';
import RightNavComponent from '../../components/layouts/RightNav';
import FooterComponent from '../../components/layouts/Footer';

const withUser = graphql(USER_QUERY, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id,
    },
  }),
});

@withUser
class ProfileScene extends PureComponent {
  render() {
    const {
      data: { loading, user },
    } = this.props;
    if (loading) return null;
    return (
      <div className="center-container">
        <Header user={user} />
        <Row gutter={10}>
          <Col span={17}>
            <Main />
          </Col>
          <Col span={7}>
            <Follows />
            <Badges />
            <RightNavComponent />
            <FooterComponent />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfileScene;
