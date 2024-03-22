import classes from './styles.module.css'

export default function(props){

    const {getDataByName, getErrorByName} = props.bindData !== undefined ? props.bindData : {}
    return(
        <div className={classes.inputField + " " + props.className}>
            <label style={props.label ? {display:'hidden'}: {display:'none'} }>{props.label}</label>
             <input 
                ref={ getDataByName ? getDataByName(props.name) : undefined} 
                type={props.type} 
                placeholder={props.placeholder}
            />
            <div style={props.getErrorByName ? {display:'hidden'}: {display:'none'} } className={classes.field__error}>{ getErrorByName ? getErrorByName(props.name) : undefined }</div> 
        </div>
    )
}