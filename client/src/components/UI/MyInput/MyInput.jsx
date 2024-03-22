import classes from './styles.module.css'

export default function(props){
    
    const {getDataByName, getErrorByName} = props.bindData !== undefined ? props.bindData : {}

    console.log(getErrorByName)
    return(
        <div className={classes.inputField + " " + props.className}>
            <label style={props.label ? {display:'block'} : {display:'none'} }>{props.label}</label>
             <input 
                ref={ getDataByName ? getDataByName(props.name) : undefined} 
                type={props.type} 
                placeholder={props.placeholder}
            />
            <div style={ getErrorByName(props.name) ? {display:'block'}: {display:'none'} } className={classes.field__error}>{ getErrorByName ? getErrorByName(props.name) : undefined }</div> 
        </div>
    )
}