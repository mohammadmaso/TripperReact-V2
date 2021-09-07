import { useRouter } from 'next/router';
import React from 'react';

import BaseLayout from '../../layouts/BaseLayout';
import ProfileDetailView from '../../views/profile/ProfileDetailView';

export default function Home() {
  const router = useRouter();
  return (
    <BaseLayout>
      <ProfileDetailView username={router.query.username! as string} />
    </BaseLayout>
  );
}
