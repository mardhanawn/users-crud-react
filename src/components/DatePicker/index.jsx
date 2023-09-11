import { DatePicker } from 'antd'
import moment from 'moment'

const SelectDate = (props) => {
    const dateFormat = 'DD-MM-YYYY'
    return (
        <DatePicker
            className="w-100"
            defaultValue={moment()}
            format={dateFormat}
            allowClear={false}
            {...props}
        />
    )
}

export default SelectDate
