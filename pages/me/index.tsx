import React from 'react';
import ProfileContainer from '../../componenets/profile/ProfileContainer';
import ProfileHeader from '../../componenets/profile/ProfileHeader';
import BaseLayout from '../../layouts/BaseLayout';

interface Props {}

export default function Home() {
  return (
    <BaseLayout>
      <ProfileContainer />
    </BaseLayout>
  );
}
