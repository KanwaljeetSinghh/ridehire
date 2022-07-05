import {Fragment} from 'react';
import styles from '../css/filters.module.css';
function FilterByKeyword(){
    return (
        <Fragment>
            <div className={`col-12 mt-3 rounded-10 d-flex d-align-center ${styles["search__bar"]}`}>
                <img src="magnifier.svg" alt="magnifier-icon" className='mr-1' />
                <input type="text" placeholder='Search by name ..' className='border-none bg-transparent' />
            </div>
            <div className='mt-2 d-flex d-flex-wrap'>
                <a className='btn-keyword font-16 l-26 f-400 border rounded-50 mr-1 mb-1'><span className='mr-1'>Anything</span><img src="Close.svg" alt="close-icon" /></a>
                <a className='btn-keyword font-16 l-26 f-400 border rounded-50 mr-1 mb-1'><span className='mr-1'>Entered</span><img src="Close.svg" alt="close-icon" /></a>
                <a className='btn-keyword font-16 l-26 f-400 border rounded-50 mr-1 mb-1'><span className='mr-1'>As</span><img src="Close.svg" alt="close-icon" /></a>
                <a className='btn-keyword font-16 l-26 f-400 border rounded-50'><span className='mr-1'>Keyword</span><img src="Close.svg" alt="close-icon" /></a>
            </div>
        </Fragment>
    )
}

export default FilterByKeyword;