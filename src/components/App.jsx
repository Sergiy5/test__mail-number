import { Toaster } from 'react-hot-toast';
import { Form } from './form/Form';
import { useState } from 'react';
import { DataUser } from './user-data/DataUser';

export const App = () => {
  const [userData, setUserData] = useState({ email: '', number: '' });
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <div style={{ display: 'block', textAlign: 'center' }}>
      <Form setData={setUserData} isLoad={setIsLoading} />
      {!isLoading ? (userData.email.length ? <DataUser data={userData} /> : null) : null}
      <Toaster />
    </div>
  );
};
