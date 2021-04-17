
import classes from './Header.module.css';
function Header (props) {
    return <div className={classes.header}>
        <h1 className={classes.head} >Shreeyas Optician</h1>
        <section> <span className={classes.span} id='Try'>Home Try On</span>
        <span className={classes.span} id='Eye'> | Eye-Glasses</span>
        <span className={classes.span} id='Sun'> |  Sunglasses</span>
        <span className={classes.span} id='Exam'> | Eye-exam</span></section>
    </div>
    
}

export default Header