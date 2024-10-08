import URLFromInput from '@/shared/components/URLFromInput';

export default async function Home()
{
	return (
		<main className={ 'flex flex-col justify-center gap-4 h-dvh' }>
			<div className={ 'text-center' }>
				<h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
					Fast. <mark className="px-2 text-white bg-red-500 rounded">Simple.</mark> URL Shortener.
				</h1>
				<p className="md:text-lg lg:text-xl font-normal text-gray-500">
					Shorten your long URLs with a single click.
				</p>
			</div>

			<URLFromInput/>
		</main>
	);
}