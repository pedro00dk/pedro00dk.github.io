import { JSX } from 'solid-js'

const remap: Record<string, string> = {
    'c++': 'cpp',
    'c#': 'csharp',
    'jupyter notebook': 'jupyter',
    plsql: 'database',
    shell: 'console',
}

export const url = (name: string) => {
    name = name.toLowerCase()
    name = remap[name] ?? name
    return `https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/icons/${name}.svg`
}

export const Icon = (props: JSX.IntrinsicElements['img'] & { name: string }) => (
    <img alt={props.name} {...props} src={url(props.name)} />
)
