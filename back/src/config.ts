process.env.NODE_ENV ||= 'development'

const {
    NODE_HTTP_HOST,
} = process.env

const config = {
    server: {
        host: NODE_HTTP_HOST ?? 'localhost',
        port: 5200,
    }
}

export default config