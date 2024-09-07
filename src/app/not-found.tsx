import Link from 'next/link';

export default async function NotFound()
{
	return (
		<main className={ 'flex flex-col justify-center gap-4 h-dvh' }>
			<div className={ 'text-center' }>
				<h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
					404. <mark className="px-2 text-white bg-red-500 rounded">Not Found.</mark>
				</h1>
				<p className="md:text-lg lg:text-xl font-normal text-gray-500">
					The page you are looking for does not exist.
				</p>

				<Link href={ '/' } className="text-blue-500 hover:underline">
					Go back to the home page
				</Link>
			</div>
		</main>
	);
}