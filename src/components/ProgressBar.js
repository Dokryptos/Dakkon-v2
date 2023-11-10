import "./ProgressBar.css"


const ProgressBar = ({ value, onChange }) => {
    return(
        <div  className="progress-bar-container">
            <input 
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={onChange}
                className="progress-bar"
            />
            <div className="progress-bar-value" style={{ width: `${value}%` }}></div>
        </div>
    )
}

export default ProgressBar