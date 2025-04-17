import clsx from 'clsx';
import css from './styles/Button.module.css';

export const Button = ({
    selected = false,
    type = 'button',
    children,
    ...otherProps
}) => {
    return (
        <button
            className={clsx(css.btn, {
            [css.isSelected]: selected,
            })}
            type={type}
            {...otherProps}
        >
         {children}
        </button>
    )
}
