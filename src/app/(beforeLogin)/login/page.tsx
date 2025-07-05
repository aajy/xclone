'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';

export default function Login() {
	const router = useRouter();

	useEffect(() => {
		router.replace('/i/flow/login');
	}, [router]);
	return <Main />;
}
