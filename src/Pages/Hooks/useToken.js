import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState(' ')
    const email = user?.user?.email;
    useEffect(() => {
        const getToken = async () => {
            if (email) {
                const { data } = await axios.post('https://arcane-caverns-12434.herokuapp.com/gettoken', { email })
                setToken(data.accessToken)
                localStorage.setItem("aceesstoken", data.accessToken)
            }
        }
        getToken()
    }, [user])
    return [token]
};

export default useToken;