import useUser from '../crochet-hooks/useUser';
import { Navigate } from 'react-router-dom';
import { Children } from 'react';

const SecuredRoute = () => {
    const {actuelUser} = useUser()

  return actuelUser ? Children : <Navigate to="login" />
}

export default SecuredRoute
