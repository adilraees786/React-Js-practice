import React from 'react'

const List = () => {
    return (
        <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-200 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Title</dt>

                    <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>

                    <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Occupation</dt>

                    <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Salary</dt>

                    <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                </div>

            </dl>
        </div>
    )
}

export default List