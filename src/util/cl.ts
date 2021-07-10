/**
 * Evaluate and join classes into a single string.
 * The `cls` parameter can receive a list of strings, arrays of strings, and objects.
 * Strings and arrays of strings are concatenated into the classes list, objects keys are also concatenated if their
 * values are truthy.
 *
 * @param cls classes and objects to evaluate and join
 * @returns a string with all combined classes
 */
export const cl = (...cls: (undefined | string | string[] | { [name: string]: any })[]) => {
    const classes: string[] = []
    for (const class_ of cls)
        if (typeof class_ === 'string') classes.push(class_)
        else if (class_ instanceof Array) classes.push(...class_)
        else for (const key in class_) if (!!class_[key]) classes.push(key)
    return classes.join(' ')
}
