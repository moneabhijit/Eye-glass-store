
import classes from './Header.module.css';
function Header() {
    return <div className={classes.header}>
        <h1 className={classes.head}>Shreeyas Optician</h1>
        <span className={classes.span}>Home Try On</span>
        <span className={classes.span}> | Eye-Glasses</span>
        <span className={classes.span}> | Sunglasses</span>
        <span className={classes.span}> | Eye-exam</span>
    </div>
}

export default Header