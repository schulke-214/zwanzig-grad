// IMPORTANT
// Rewrite this prettier ( use functions to get vals etc )

export const Col = ({ children, className, offset, width, ...props }) => {
    let classes = [];
    
    if ( typeof offset == 'object' ) {
        if ( offset['default'] )
            classes.push(`offset-${offset['default']}`);

        if ( offset['phone'] ) 
            classes.push(`offset-phone-${offset['phone']}`);

        if ( offset['smallTablet'] ) 
            classes.push(`offset-tablet-small-${offset['smallTablet']}`);

        if ( offset['tablet'] ) 
            classes.push(`offset-tablet-${offset['tablet']}`);

        if ( offset['desktop'] ) 
            classes.push(`offset-desktop-${offset['desktop']}`);
    } else if( offset ) {
        classes.push(`offset-${offset}`);
    }

    if ( typeof width == 'object' ) {
        if ( width['default'] )
            classes.push(`col-${width['default']}`);

        if ( width['phone'] ) 
            classes.push(`col-phone-${width['phone']}`);

        if ( width['smallTablet'] ) 
            classes.push(`col-tablet-small-${width['smallTablet']}`);

        if ( width['tablet'] ) 
            classes.push(`col-tablet-${width['tablet']}`);

        if ( width['desktop'] ) 
            classes.push(`col-desktop-${width['desktop']}`);
    } else if ( width ) {
        classes.push(`col-${width}`);
    }

    if ( className )
        classes.push(className)

    return ( 
        <div className={classes.join(' ')} {...props}>
            { children }
        </div>
    );
}

export const Row = ({ children, className, ...props}) => 
    <div className={ `row${className ? ' ' + className : ''}` } {...props}>{children}</div>;

export const Grid = ({ children, className, ...props }) => 
    <div className={ `container${className ? ' ' + className : ''}` } {...props}>{children}</div>;