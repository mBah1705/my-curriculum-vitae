process.env.NODE_ENV ||= 'development'

const port = process.env.NODE_ENV === 'production'
    ? process.env.NODE_PORT
    : 5200

const {
    NODE_HTTP_HOST,
} = process.env

const config = {
    server: {
        host: NODE_HTTP_HOST ?? 'localhost',
        port,
    }
}

export default config