import { getSession } from 'next-auth/react'

import UserProfile from '../components/profile/user-profile';

export default function ProfilePage() {
  return <UserProfile />;
}


export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: { session },
  }

}