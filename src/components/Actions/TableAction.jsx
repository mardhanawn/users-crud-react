import { Button, Popconfirm, message } from 'antd'
import ActionButton from '../Buttons/ActionButton'

const TableAction = ({
    data,
    handleView = () => {},
    handleDelete = () => {},
    setShowDialogForm,
    setIsType,
}) => {
    return (
        <>
            <ActionButton
                title="View"
                onClick={() => {
                    handleView(data.id)
                    setShowDialogForm(true)
                    setIsType('view')
                }}
            />
            <ActionButton
                title="Update"
                onClick={() => {
                    handleView(data.id)
                    setShowDialogForm(true)
                    setIsType('update')
                }}
            />
            <Button type="text" className="px-1" to="#">
                <Popconfirm
                    title="Apakah yakin ingin menghapus data?"
                    onConfirm={() => {
                        message.success('Data berhasil dihapus!')
                        handleDelete(data.id)
                    }}
                    onCancel={() => message.error('Data dibatalkan dihapus!')}
                    okText="Hapus"
                    cancelText="Batal"
                >
                    Delete
                </Popconfirm>
            </Button>
        </>
    )
}

export default TableAction
