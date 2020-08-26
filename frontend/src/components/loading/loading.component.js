import React from 'react';

import './loading.style.scss';

function Loading() {
    return (
        <div className="loading">
            Loading
            <i className="fa fa-cog fa-spin">
            </i>
        </div>
    );
}

export default Loading;