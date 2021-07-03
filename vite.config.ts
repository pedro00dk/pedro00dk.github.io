import reactRefresh from '@vitejs/plugin-react-refresh'
import viteCompression from 'vite-plugin-compression'

export default {
    plugins: [reactRefresh(), viteCompression()],
}
