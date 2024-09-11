'use client';

import Link from 'next/link';

export default function Error()
{
	return (
		<main className={ 'flex flex-col justify-center gap-4 h-dvh' }>
			<div className={ 'text-center' }>
				<h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
					500. <mark className="px-2 text-white bg-red-500 rounded">Something went wrong.</mark>
				</h1>

				<p className="md:text-lg lg:text-xl font-normal text-gray-500">
					An error occurred while processing your request. Please try again later.
				</p>

				<Link href={ '/' } className="text-blue-500 hover:underline">
					Go back to the home page
				</Link>
			</div>
		</main>
	);
}