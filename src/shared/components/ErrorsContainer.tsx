import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import React                          from 'react';

export default function ErrorsContainer
(
	{
		errorList
	}:
		{
			errorList: string[]
		}
)
{
	return (
		<div className={ 'fixed top-4 end-1/2 md:end-8 translate-x-1/2 md:translate-x-0 z-50 flex flex-col gap-2' }>
			{
				errorList?.map
				(
					( error ) =>
						(
							<div
								key={ error }
								className="flex flex-row justify-evenly items-center gap-2 bg-white rounded-lg border-2 border-red-500 p-2"
							>
								<ClipboardDocumentCheckIcon className={ 'size-5' }/>
								<div className="text-sm font-normal">{ error }</div>
							</div>
						)
				)
			}
		</div>
	);
}