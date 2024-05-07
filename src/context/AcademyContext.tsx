import React from 'react';

import useFetch from '@/hooks/useFetch';
import { useAuth } from '@/context/AuthContext';

type IAcademy = {
  id: string;
  name: string;
};

type IAcademyContextData = {
  academy: IAcademy | null;
  loading: boolean;
  error: string | Array<any> | null;
  getData(): Promise<void>;
};

const AcademyContext = React.createContext<IAcademyContextData | null>(null);

export function useAcademy() {
  const context = React.useContext(AcademyContext);
  if (!context) {
    throw new Error('useAcademy must be within AcademyContextProvider');
  }
  return context;
}

export const AcademyContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [academy, setAcademy] = React.useState<IAcademy | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | Array<any> | null>(null);

  const { user } = useAuth();

  const getData = async () => {
    setLoading(true);

    const { data, error } = useFetch<IAcademy>(
      'get',
      `https://api.nanicas/academy/${academy?.id}`,
      {
        headers: {
          Authorization: 'Bearer ' + user?.token,
        },
      },
    );

    if (error) {
      setAcademy(null);
      setError(error);
    } else {
      setAcademy(data);
    }

    setLoading(false);
  };

  return (
    <AcademyContext.Provider value={{ academy, loading, error, getData }}>
      {children}
    </AcademyContext.Provider>
  );
};
