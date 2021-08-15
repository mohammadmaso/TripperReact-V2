import React from 'react';
import ProfileContainer from '../../componenets/profile/ProfileContainer';
import ProfileHeader from '../../componenets/profile/ProfileHeader';
import BaseLayout from '../../layouts/BaseLayout';
import MeDetailView from '../../views/profile/MeDetailView';

interface Props {}

export default function Home() {
  return (
    <BaseLayout>
      <MeDetailView />
    </BaseLayout>
  );
}
