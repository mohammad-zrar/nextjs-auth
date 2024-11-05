// import { useSession, getSession } from 'next-auth/react';

import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
// import { useEffect } from 'react';

function UserProfile() {
  // const { data: session, status } = useSession();
  // const loading = status === 'loading';

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     }
  //   })
  // }, [])

  // if (loading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }
  return (
    <section className={classes.profile}>

      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
