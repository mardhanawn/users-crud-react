import { Button, Table } from 'antd'
import moment from 'moment'
import { useState } from 'react'

import TableAction from '../../components/Actions/TableAction'
import DialogForm from '../../components/Dialog'
import users from '../../dummy/users.json'

const ListUsers = () => {
    const [dataSource, setDataSource] = useState(users)
    const [detailData, setDetailData] = useState(null)
    const [showDialogForm, setShowDialogForm] = useState(false)
    const [isType, setIsType] = useState(false)

    const handleView = (id) => {
        const datas = [...dataSource]
        const getData = datas.find((data) => data.id === id)
        setDetailData({
            ...getData,
            date_birth: getData.date_birth.length > 0 ? moment(getData.date_birth) : moment(),
            input_date: getData.input_date.length > 0 ? moment(getData.input_date) : moment(),
        })
    }

    const handleDelete = (id) => {
        const datas = [...dataSource]
        const filteredData = datas.filter((data) => data.id !== id)
        setDataSource(filteredData)
    }

    const columns = [
        {
            title: 'No',
            key: 'no',
            render: (text, record, index) => {
                return index + 1
            },
        },
        {
            title: 'Nama',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Alamat',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Jenis Kelamin',
            dataIndex: 'gender',
            key: 'gender',
            render: (text) => (text === 'P' ? 'Pria' : 'Wanita'),
        },
        {
            title: 'Tanggal Lahir',
            dataIndex: 'date_birth',
            key: 'date_birth',
            render: (text) => moment(text).format('ll'),
        },
        {
            title: 'Tanggal Input',
            dataIndex: 'input_date',
            key: 'input_date',
            render: (text) => `${moment(text).format('ll')} ${moment(text).format('LT')}`,
        },
        {
            title: 'Aksi',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <TableAction
                    data={record}
                    handleView={handleView}
                    handleDelete={handleDelete}
                    setShowDialogForm={setShowDialogForm}
                    setIsType={setIsType}
                />
            ),
        },
    ]

    return (
        <>
            <div className="container-lg">
                <div className="row mb-4">
                    <div className="col-auto">
                        <Button
                            type="primary"
                            onClick={() => {
                                setShowDialogForm(true)
                                setIsType('create')
                            }}
                        >
                            Tambah User
                        </Button>
                    </div>
                </div>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowKey={(dataSource) => dataSource.id}
                />
            </div>
            {showDialogForm && (
                <DialogForm
                    visible={showDialogForm}
                    setVisible={() => {
                        setDetailData(false)
                        setShowDialogForm()
                    }}
                    initialValues={detailData}
                    isType={isType}
                    dataSource={dataSource}
                    setDataSource={setDataSource}
                />
            )}
        </>
    )
}

export default ListUsers
