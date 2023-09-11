import { Form as AntdForm, Input, Modal, Radio } from 'antd'
import moment from 'moment'
import SaveCancelButton from '../Buttons/SaveCancelButton'
import SelectDate from '../DatePicker'

const defaultPropsInitialValues = {
    name: '',
    address: '',
    gender: 'P',
    date_birth: moment(),
    input_date: moment(),
}

const FormDialog = ({
    visible,
    setVisible,
    initialValues,
    isType,
    dataSource,
    setDataSource = () => {},
}) => {
    const [formInstance] = AntdForm.useForm()
    const newInitialValues = { ...defaultPropsInitialValues, ...initialValues }

    let title = 'Tambah'
    if (isType === 'view') title = 'View'
    if (isType === 'update') title = 'Update'

    const isView = isType === 'view'

    const onSubmit = (value) => {
        if (isType === 'create') {
            let datas = [...dataSource]
            const newValue = {
                ...value,
                id: Math.random(),
            }
            datas.push(newValue)
            setDataSource([...dataSource, newValue])
        }

        if (isType === 'update') {
            // console.log('block update')
            let datas = [...dataSource]
            let findData = datas.find((data) => data.id === newInitialValues.id)
            // console.log('findData isUpdate', findData)
            setDataSource([
                ...dataSource.filter((data) => data.id !== newInitialValues.id),
                {
                    ...findData,
                    name: value.name,
                    address: value.address,
                    gender: value.gender,
                    date_birth: value.date_birth,
                },
            ])
            // console.log('dataSource after update', dataSource)

            // dataSource.forEach((data) => {
            //     console.log('data foreach', data)
            //     console.log('value foreach', value)
            //     if (data.id === newInitialValues.id) {
            //         const newValue = {
            //             ...findData,
            //             name: value.name,
            //             address: value.address,
            //             gender: value.gender,
            //             date_birth: value.date_birth,
            //         }
            //         console.log('newValue isUpdate', newValue)
            //     }
            // })
        }

        onCancel()
    }

    const onCancel = () => {
        setVisible(false)
    }

    return (
        <Modal
            title={`${title} User`}
            footer={null}
            visible={visible}
            onCancel={onCancel}
            width={430}
            centered
            bodyStyle={{ maxHeight: 560, overflow: 'auto' }}
        >
            <AntdForm
                layout="vertical"
                form={formInstance}
                initialValues={newInitialValues}
                onFinish={onSubmit}
            >
                <AntdForm.Item name="name" label="Nama" rules={[{ required: true }]}>
                    <Input disabled={isView} placeholder="Masukkan Nama" />
                </AntdForm.Item>
                <AntdForm.Item name="address" label="Alamat">
                    <Input disabled={isView} placeholder="Masukkan Alamat" />
                </AntdForm.Item>
                <AntdForm.Item name="gender" label="Jenis Kelamin">
                    <Radio.Group>
                        <Radio disabled={isView} value="P">
                            Pria
                        </Radio>
                        <Radio disabled={isView} value="W">
                            Wanita
                        </Radio>
                    </Radio.Group>
                </AntdForm.Item>
                <AntdForm.Item name="date_birth" label="Tanggal Lahir">
                    <SelectDate disabled={isView} />
                </AntdForm.Item>
                <AntdForm.Item name="input_date" hidden>
                    <SelectDate disabled={isView} />
                </AntdForm.Item>
            </AntdForm>
            <SaveCancelButton
                onSave={formInstance.submit}
                onCancel={onCancel}
                hideSaveBtn={isView}
            />
        </Modal>
    )
}

export default FormDialog
