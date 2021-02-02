import React from 'react'

const Tag = ({tag, url}) => (
    <span className="shadow-sm p-1">
        <a href={url} className="bg-green-normal lowercase hover:bg-green-dark p-1 text-white">
            {tag}
        </a>
    </span>
)

export default Tag