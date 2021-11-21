import { useState } from "react"
const HocComponent = OriginalComponent => {
    function NewComponent(props) {
        const [count, setCounter] = useState(0)

        const clicker = () => {
            setCounter(count + 1)
        }
        return (
            <OriginalComponent count={count} clicker={clicker} {...props} />
        )
    }
    return NewComponent
}

export default HocComponent