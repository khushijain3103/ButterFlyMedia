import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import ProfilePage from '@/components/profile/Index'

export default function view()
{
    let router = useRouter();
    const [username , setUsername] = React.useState(router.query.username);
    // let username = router.query.username;

    useEffect(() => {
        setUsername(router.query.username);
    }, [router.query.username]);

    console.log(username);

    return(
        
        <ProfilePage userName = {username} />
    )
}