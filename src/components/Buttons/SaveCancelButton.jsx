import { Button } from 'antd'

const SaveCancelButton = ({
    style = {},
    buttonBlock = false,
    hideSaveBtn = false,
    onCancel,
    onSave,
}) => {
    const cancelHandler = () => {
        if (onCancel) {
            onCancel()
        }
    }

    return (
        <div
            className="text-center d-flex flex-row justify-content-around"
            style={{ marginTop: 35, ...style }}
        >
            <Button
                type="default"
                className="px-5 mr-3"
                onClick={cancelHandler}
                block={buttonBlock}
            >
                {hideSaveBtn ? 'Tutup' : 'Batal'}
            </Button>
            {!hideSaveBtn && (
                <Button
                    className="px-5"
                    type="primary"
                    htmlType={onSave ? 'button' : 'submit'}
                    onClick={onSave}
                    block={buttonBlock}
                >
                    Simpan
                </Button>
            )}
        </div>
    )
}

export default SaveCancelButton
