import React from 'react'
import { cl } from '../../util/cl'
import classes from './Skeleton.module.css'

/**
 * Skeleton implementation used to display loading states.
 *
 * @param props.tag html tag string used in the skeleton, defaults to `'span'`
 * @param props.type type of the skeleton, it influences its shape
 * @param props.effect the type of visual effect displayed in the skeleton
 */
export const Skeleton = (
    props: React.HTMLAttributes<HTMLElement> & {
        tag?: keyof React.ReactHTML
        type?: 'text' | 'rect' | 'circle'
        effect?: 'pulse' | 'wave'
    }
) => {
    const { tag: Tag = 'span', type = 'text', effect = 'pulse', ...rootProps } = props
    const cls = { [classes[type]]: true, [classes[effect]]: true }

    return <Tag {...rootProps} className={cl(classes.root, cls, rootProps.className)} />
}
