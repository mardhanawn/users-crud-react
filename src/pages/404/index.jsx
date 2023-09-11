import { Button } from 'antd'
import { Link } from 'react-router-dom'

function PagesError404() {
    return (
        <div
            className="container d-flex flex-column justify-content-center align-items-start mb-auto"
            style={{ height: 600 }}
        >
            <h3>Page not found</h3>
            <h4>
                Whoops, sepertinya halaman tidak tersedia <br /> 404 —
            </h4>
            <div className="font-weight-bold font-size-70 mb-1"></div>
            <Button type="primary">
                <Link to="/">Kembali ke Halaman Utama</Link>
            </Button>
        </div>
    )
}

export default PagesError404
