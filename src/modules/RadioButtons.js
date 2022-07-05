import styles from '../css/filters.module.css';

const RadioButtons = () => {
  return (
    <div className="d-flex d-flex-wrap font-16 mt-3">
        <p className="col-6 radio-button-wrapper">
          <input type="radio" id="test1" name="radio-group" />
          <label for="test1">1 - 7 Pessenger</label>
        </p>
        <p className="col-6 radio-button-wrapper">
          <input type="radio" id="test3" name="radio-group" />
          <label for="test3">14 - 25 Pessenger</label>
        </p>
        <p className="col-6 radio-button-wrapper">
          <input type="radio" id="test2" name="radio-group" />
          <label for="test2">7 - 14 Pessenger</label>
        </p>
        <p className="col-6 radio-button-wrapper">
          <input type="radio" id="test5" name="radio-group" />
          <label for="test5">Exact Count</label>
          
        </p>
        
        <p className="col-6 radio-button-wrapper">
          <input type="radio" id="test4" name="radio-group" />
          <label for="test4">25 - 40 Pessenger</label>
        </p>
        <p className={`d-flex col-6 radio-button-wrapper`}>
            <div className={`col-12 rounded-10 d-flex d-align-center ${styles["search__bar"]}`}>
              <input type="number" placeholder='e.g 50' className='col-12 border-none bg-transparent font-16 l-26 f-400 neg-letter-spacing' />
            </div>
        </p>
    </div>
  );
}

export default RadioButtons;