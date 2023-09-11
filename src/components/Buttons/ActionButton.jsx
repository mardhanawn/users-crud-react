import { Button } from 'antd'

const ActionButton = ({ title, onClick, ...props }) => {
    return (
        <Button type="text" className="px-1" to="#" onClick={onClick} {...props}>
            {title}
        </Button>
    )
}

export default ActionButton
