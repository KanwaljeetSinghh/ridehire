function CircleFill(props){
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.310547" y="0.331055" width="25" height="25" rx="12.5" fill={props.color} />
            <path d="M8.31055 12.9959L10.6482 15.8311L17.3105 9.83105" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        </svg>

    )
}

export default CircleFill;