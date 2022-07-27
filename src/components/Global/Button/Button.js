/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Button = () => {
    return (
        <button css={styles}>Join Us</button>
    )
}

const styles = css`
    padding: 18px 50px;
    background: limegreen;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    outline: none;
`

export default Button;