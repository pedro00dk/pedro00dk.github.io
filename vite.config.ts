import pluginDevtools from 'solid-devtools/vite'
import { defineConfig } from 'vite'
import pluginSolid from 'vite-plugin-solid'

export default defineConfig({
    plugins: [pluginDevtools({ autoname: true, locator: true }), pluginSolid({})],
    server: { port: 5000 },
    build: { target: 'esnext' },
})
