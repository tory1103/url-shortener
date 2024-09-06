import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import React             from 'react';
import './globals.css';

export const metadata: Metadata = {
	title      : 'URL Shortener',
	description: 'A simple URL shortener'
};

const FONT = Source_Sans_3( { subsets: [ 'latin' ], weight: '400' } );

export default function RootLayout
(
	{
		children
	}
		: Readonly<{ children: React.ReactNode }>
)
{
	return (
		<html lang="en">
		<body className={ FONT.className }>
		{ children }
		</body>
		</html>
	);
}